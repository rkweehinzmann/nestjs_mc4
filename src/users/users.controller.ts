import { Controller, Get, Post, Param, Query, Body,
    Headers,
    ParseIntPipe,
    DefaultValuePipe,
    ValidationPipe,
    Patch,
 } from '@nestjs/common';
import { OPTIONAL_PROPERTY_DEPS_METADATA } from '@nestjs/common/constants';
import { CreateUserDto } from './dtos/create-users.dto';
import { isInstance } from 'class-validator';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-users.dto';

@Controller('users')
export class UsersController {
    
    @Get('/:id?')
    public getUsers(

        @Param() getUsersParamDto: GetUsersParamDto, 
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(3), ParseIntPipe) page: number,
        @Headers() myheader:any,
    ){
        console.log(getUsersParamDto)
        return 'You sent a GET request to users endpoint.'
    }

    @Post()
    public createUsers(
        @Body() createUserDto: CreateUserDto){
        console.log(createUserDto instanceof CreateUserDto);
        return 'You sent a POST request to users endpoint.'
    }

    @Patch()
    public patchUser(
        @Body() PatchUserDto:PatchUserDto
    )  
    {}
}
