import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { AuthService } from 'src/auth/providers/auth/auth.service';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';

@Injectable()
export class UsersService {
    
    constructor(
        // inject auth service
        @Inject( forwardRef(() => AuthService))
        private readonly authService: AuthService,
    ){}
public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
){
    const isAuth = this.authService.isAuth()
    console.log(isAuth)
    return isAuth;
    
}
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
