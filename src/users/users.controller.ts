import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-users.dto.users';


@Controller('users')
export class UsersController {
    
    @Get('/:id')
    public getUsers(@Param() params: any, @Query() query: any){
        console.log(params)
        console.log(query)
        return 'You sent a GET request to users endpoint.'
    }

    @Post()
    public createUsers(@Body() createUserDto:CreateUserDto){
        console.log(CreateUserDto)
        return 'You sent a POST request to users endpoint.'
    }


}
