import { IsDateString, IsEmail, IsOptional, IsString, IsStrongPassword } from "class-validator"

export class CreateUserDTO {

  @IsString()
  name :string

  @IsEmail()
  email: string

  @IsString()
  @IsStrongPassword()
  password: string

  @IsOptional()
  @IsDateString()
  birthAt: string

}
