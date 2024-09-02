import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AuthCredetialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
    {
      message: 'password too weak',
    },
  )
  password: string;
}