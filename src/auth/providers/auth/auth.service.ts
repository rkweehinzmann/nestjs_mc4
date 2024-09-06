import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {

    constructor(
        // injecting UsersService
        @Inject(forwardRef(() => UsersService))
        private readonly usersService: UsersService,
    ){}

    public login(email:string, password:string, id:string){
    // check if user exists in database (here is where this module depends on user module)
    const user = this.usersService.findOneById('1212')
   // login
     
    // return token
    return 'SAMPLE_TOKEN'
    }

    public isAuth() {
        return true
    }
}
