import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { AuthService } from 'src/auth/providers/auth.service';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { CreateUserDto } from '../dtos/create-users.dto';

@Injectable()
export class UsersService {
    
    constructor(
/**
        // inject auth service
        @Inject( forwardRef(() => AuthService))
        private readonly authService: AuthService,


        // inject repository
        @InjectRepository(User)
        private usersRepository:Repository<User>,
*/    
    ){}

    public async createUser(createUserDto: CreateUserDto){
        // check if user already exists with this email
    }

    public findAll(
     getUsersParamDto: GetUsersParamDto,
     limit: number,
     page: number,
){
    /**
    const isAuth = this.authService.isAuth()
    console.log(isAuth)
    return [
        {
          firstName: 'John',
          email: 'john@doe.com',
        },
        {
          firstName: 'AlicE',
          email: 'alice@doe.com',
        },
      ];

    */
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
