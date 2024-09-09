import { postType } from "./enums/postType.enum"
import { postStatus } from "./enums/postStatus.enum"
import { IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MinLength } from "class-validator"



export class CreatePostDto{

    @IsString()
    @MinLength(4)
    @IsNotEmpty()
    title: string;

    @IsEnum(postType)
    @IsNotEmpty()
    postType: postType;

    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9] + (?:-[a-z0-9]+)*$/,{
        message:'A slug should all be small letters and uses only "-" without spaces. Example "my-url"'
    })
    slug: string;

    @IsEnum(postStatus)
    @IsNotEmpty()
    status: postStatus;

    @IsString()
    @IsOptional()
    content?: string;

    @IsOptional()
    @IsJSON()
    schema: string;

    @IsOptional()
    @IsUrl()
    featuredImageUrl?: string;

    @IsISO8601()
    publishedOn?: Date;

    @IsOptional()
    @IsArray()
    @IsString( {each: true})
    @MinLength(3, {each: true})
    tags?: string[];


    metaOptions?: [{key:'sidebarEnabled', value:'true'}]
}