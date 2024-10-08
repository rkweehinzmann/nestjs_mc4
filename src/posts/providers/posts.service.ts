import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {

    constructor(
        // Injecting Users Service inter-modular injection
        private readonly usersService: UsersService,
    ){}
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
