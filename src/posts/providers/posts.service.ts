import { Body, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Repository } from 'typeorm';
import { MyPost } from '../mypost.entity';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {

    constructor(
        // Injecting Users Service inter-modular injection
        private readonly usersService: UsersService,

        /**
         * Inject postsRepository
         */
        @InjectRepository(MyPost)
        private readonly postsRepository: Repository<MyPost>,

        /**
         * Inject metaOptionsRepository
         */
        @InjectRepository(MetaOption)
        public readonly metaOptionsRepository: Repository<MetaOption>,
    ){}

    /**
     * Creating new posts along with metaOption
     */

    public async create(@Body() createPostDto: CreatePostDto){

     // create post// due to cascade it creates metaOptions as well
    let post = this.postsRepository.create(createPostDto);

    // return post to the user
    return await this.postsRepository.save(post);

    }


    public async findAll(userId: string){
        
        // Users Service
        
        // Find user
        const user = this.usersService.findOneById(userId); 

        // how to fetch relationship when metaOption
        // post is equal to our query
        let posts = this.postsRepository.find({});
        return posts;    
    }
    
}
