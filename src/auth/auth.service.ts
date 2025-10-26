import { Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import type { ConfigType } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { UserService } from 'src/modules/user/core/service/user.service'
import { UserDto } from 'src/modules/user/http/dto/user.dto'
import { jwtConfig } from 'src/shared/config/jwt-config'
import { AuthRefreshDto } from './dto/auth-refresh.dto'
import { AuthResponseDto } from './dto/auth-reponse.dto'
import { JwtPayload } from './interfaces/jwt-payload.interface'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private config: ConfigType<typeof jwtConfig>,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserDto | null> {
    const user = await this.userService.validateUserPassword(email, password)
    if (!user || !user.isActive) null
    return user
  }

  async jwtSign(user: UserDto): Promise<AuthResponseDto> {
    const accessConfig = this.config.access
    const refreshConfig = this.config.refresh

    const payload: JwtPayload = { sub: user.id }

    const accessToken = await this.jwtService.sign(
      payload,
      accessConfig?.signOptions,
    )

    const refreshToken = await this.jwtService.sign(
      payload,
      refreshConfig?.signOptions,
    )

    return new AuthResponseDto(accessToken, refreshToken)
  }

  async jwtRefresh(authRefreshDto: AuthRefreshDto): Promise<AuthResponseDto> {
    const refreshConfig = this.config.refresh

    const verified = await this.jwtService.verifyAsync<JwtPayload>(
      authRefreshDto.refreshToken,
      refreshConfig?.verifyOptions,
    )

    if (verified) {
      const id = verified.sub
      const user = await this.userService.findOne(id)
      return this.jwtSign(user)
    }

    throw new UnauthorizedException()
  }
}
