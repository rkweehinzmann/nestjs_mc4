import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
    public findAll(userId: string){
        console.log(userId)

        // Users Service
        // Find user

        // find all his posts
        return[
            {
                title: '1 Mo',
                content: 'content A',
            },
            {
                title: '2 Mo',
                content: 'content B',
            },
        ]
    }
}
