import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    


    /*
    find user by Id
    */
    public findOneById(id: string) {
        return {
            id: 1234,
            firstName: 'Alice',
            email: 'alice@doe.com'
        }

    }
}
