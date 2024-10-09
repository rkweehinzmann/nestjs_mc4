import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength, IsNotEmpty, Matches, IsOptional, IsJSON } from "class-validator";

export class CreateTagDto{
    
    @ApiProperty()
    @IsString()
    @MinLength(3)
    @MaxLength(256)
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(256)
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/,{
        message:'A slug should all be small letters and uses only "-" without spaces. Example "my-url"'
    })
    slug: string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    description?: string;

    @ApiPropertyOptional()
    @IsJSON()
    @IsOptional()
    @MaxLength(1024)
    featuredImageUrl?: string;
}