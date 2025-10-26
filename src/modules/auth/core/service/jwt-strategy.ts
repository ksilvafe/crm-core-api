import { Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import type { ConfigType } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { jwtConfig } from 'src/config/jwt-config'
import { UserService } from 'src/modules/user/core/service/user.service'
import { UserDto } from 'src/modules/user/http/dto/user.dto'
import { JwtPayload } from '../interfaces/jwt-payload.interface'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(jwtConfig.KEY)
    config: ConfigType<typeof jwtConfig>,
    private userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.secret,
    })
  }

  async validate(payload: JwtPayload): Promise<UserDto> {
    const { sub } = payload
    const user = await this.userService.findOne(sub)

    if (!user) {
      throw new UnauthorizedException()
    }

    return user
  }
}
