import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { UserDto } from 'src/modules/user/http/dto/user.dto'
import { AuthService } from './auth.service'
import { AuthUser } from './decorators/auth-user.decorator'
import { JwtAuthGuard } from './guards/jwt-auth-guards'
import { LocalAuthGuard } from './guards/local-auth-guard'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  signin(@AuthUser() user: UserDto) {
    return this.authService.jwtSign(user)
  }

  @UseGuards(JwtAuthGuard)
  @Post('protected')
  protected(@AuthUser() user: UserDto) {
    return user
  }
}
