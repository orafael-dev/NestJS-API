import { IsDateString, IsEmail, IsEnum, IsNumber, IsOptional, IsString, IsStrongPassword } from "class-validator"
import { Role } from "src/enums/role.enum"

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

  @IsOptional()
  @IsEnum(Role)
  role: number
}
