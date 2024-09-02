import { Body, Controller,  Post, ValidationPipe } from '@nestjs/common';
import { AuthCredetialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor( private authService: AuthService) {}

  @Post('/signup')
  SignUpUser(@Body(ValidationPipe) authCredentialDto: AuthCredetialsDto): Promise<User> {
    return this.authService.SignUpUser(authCredentialDto);
  }
}
