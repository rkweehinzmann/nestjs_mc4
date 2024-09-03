import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator"; 

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3, {message:'not met'})
    @MaxLength(96)
    firstName: string;
    
    @IsString()
    @IsOptional()
    @MinLength(3)
    @MaxLength(96)
    lastName?: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    //@Matches(new RegExp('//^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$//'), {message:'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number.'})
    password: string;

}