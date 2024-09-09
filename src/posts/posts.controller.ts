import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiTags } from '@nestjs/swagger';

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

    @Post()
    public createPost(@Body() createPostDto:CreatePostDto){
            console.log(createPostDto instanceof CreatePostDto);
            return 'You sent a POST request to posts endpoint.'
    }
}
