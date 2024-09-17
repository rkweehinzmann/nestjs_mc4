import { Body, Controller, Get, Param, Post, Patch } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {

    constructor(
        // Injecting Posts Service
        private readonly postsService: PostsService,
    ){}

    // GET http://localhost:3000/posts/userId
    @Get('/:userId?')
    public getPosts(@Param('userId') userId:string) {
        return this.postsService.findAll(userId)
    }

    @ApiOperation({
        summary: "creates a new post"
    })
    @ApiResponse({
        status: 201,
        description: "You get 201 response if your post is created successfully"
    })
    @Post()
    public createPost(@Body() createPostDto:CreatePostDto){
            console.log(createPostDto)
            return 'You sent a POST request to posts endpoint.'
    }

    @Patch()
    public updatePost(@Body() patchPostDto: PatchPostDto){
        console.log(patchPostDto);
    }
}
