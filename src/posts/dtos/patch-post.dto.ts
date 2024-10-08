import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreatePostDto } from "./create-post.dto";
import { IsInt, IsNotEmpty } from "class-validator";

export class PatchPostDto extends PartialType(CreatePostDto) {

    @ApiProperty({
        description:'ID of the post that needs to be patched.',
    })
    @IsInt()
    @IsNotEmpty()
    id: number;
}