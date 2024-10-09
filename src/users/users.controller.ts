
import { Controller, Get, Post, Param, Query, Body,
    Headers,
    ParseIntPipe,
    DefaultValuePipe,
    Patch,
 } from '@nestjs/common';
import { OPTIONAL_PROPERTY_DEPS_METADATA } from '@nestjs/common/constants';
import { CreateUserDto } from './dtos/create-users.dto';
import { isInstance } from 'class-validator';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-users.dto';
import { UsersService } from './providers/users.service';
import { ApiTags, ApiQuery, ApiOperation, ApiResponse } from '@nestjs/swagger';


@Controller('users')
@ApiTags('Users')
export class UsersController {

    constructor(
        //Injecting Users Service
        private readonly usersService: UsersService,
    ){}

    @Get('/:id?')
    // ApiOperation for general info about this endpoint
    @ApiOperation({
        summary: "Fetches a list of registered users on the app."

    })
    @ApiResponse({
        status: 200,
        description: 'Successfully requested query.'
    })
    @ApiQuery({
    name: 'limit',
    type: 'number',
    description: 'maximal number of results returned per query.',
    required: false,
    example: 10
    })

    @ApiQuery({
        name: 'page',
        type: 'number',
        description: 'position of page number you want to be returned.',
        required: false,
        example: 1
        })
    
    public getUsers(

        @Param() getUsersParamDto: GetUsersParamDto, 
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(3), ParseIntPipe) page: number,
        @Headers() myheader:any,
    ){
        //console.log(getUsersParamDto)
        return 'You sent a GET request to users endpoint.'
    }

    @Post()
    public createUsers(
        @Body() createUserDto: CreateUserDto){
        console.log(createUserDto instanceof CreateUserDto);
        return this.usersService.createUser(createUserDto);
    }

    @Patch()
    public patchUser(
        @Body() PatchUserDto:PatchUserDto
    )  
    {}
}
