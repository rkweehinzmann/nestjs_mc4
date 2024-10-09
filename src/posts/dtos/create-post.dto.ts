import { postType } from "./enums/postType.enum"
import { postStatus } from "./enums/postStatus.enum"
import { IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MaxLength, MinLength, ValidateNested } from "class-validator"
import { Type } from "class-transformer";
import { CreatePostMetaOptionsDto } from "../../meta-options/dtos/create-post-meta-options.dto";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";



export class CreatePostDto{

    @IsString()
    @MinLength(4)
    @MaxLength(512)
    @IsNotEmpty()
    @ApiProperty({
        title: "This is a title",
        description: "This is the title of the blog post"
    })
    title: string;

    @IsEnum(postType)
    @IsNotEmpty()
    @ApiProperty({
        enum: postType,
        description: "Possible values, check Enum array."
    })
    postType: postType;

    @IsString()
    @IsNotEmpty()
    @MaxLength(256)
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/,{
        message:'A slug should all be small letters and uses only "-" without spaces. Example "my-url"'
    })
    slug: string;
    @IsEnum(postStatus)
    @IsNotEmpty()
    @ApiProperty({
        enum: postStatus,
        description: "For possible values, check Enum array."
    })
    status: postStatus;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        description: "some description of an optional property"
    })
    content?: string;

    @IsOptional()
    @IsJSON()
    schema: string;

    @IsOptional()
    @IsUrl()
    @MaxLength(1024)
    @ApiPropertyOptional({
        description: "some text inside the dto class CreatePostDto"
    })
    featuredImageUrl?: string;

    @IsISO8601()
    publishedOn?: Date;

    @IsOptional()
    @IsArray()
    @IsString( {each: true})
    @MinLength(3, {each: true})
    tags?: string[];

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true})
    @Type( ()=> CreatePostMetaOptionsDto )
    @ApiPropertyOptional({
        type: 'array',
        required: false,
        items: {
            type: 'object',
            properties: {
                key:{ type: 'string',      
                    description: 'The key can be any string identifier for your meta option', example: 'sidebarEnabled'
                    },    
                value:{ type: 'any',      
                        description: 'The value can be anything you want to save for the key of your meta option', example: 'false'
                        },    
                },
        }
    })
    metaOptions?: CreatePostMetaOptionsDto[];
}