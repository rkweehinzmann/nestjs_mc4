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

    // create metaOption that comes with the requests. This must exist first. 
    let metaOptions = createPostDto.metaOptions? this.metaOptionsRepository.create(createPostDto.metaOptions) : null;

    if(metaOptions){
        await this.metaOptionsRepository.save(metaOptions);
    }

    // create post
    let post = this.postsRepository.create(createPostDto);

    // add metaOptions to the post
    if(metaOptions){
        post.metaOptions = metaOptions;
    }

    // return post to the user

    return await this.postsRepository.save(post);

    }


    public findAll(userId: string){
        
        // Users Service
        
        // Find user
        const user = this.usersService.findOneById(userId) 

        // find all his posts
        return[
            {
                user: user,
                title: '1 Mo',
                content: 'content A',
            },
            {

                user: user,
                title: '2 Mo',
                content: 'content B',
            },
        ]
    }
}
