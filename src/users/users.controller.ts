import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';
import { query } from 'express';
// status lecture 17

@Controller('users')
export class UsersController {
    
    @Get('/:id')
    public getUsers(@Param() params: any, @Query() query: any){
        console.log(params)
        console.log(query)
        return 'You sent a GET request to users endpoint.'
    }

    @Post()
    public createUsers(@Body() myrequest:any){
        console.log(myrequest)
        return 'You sent a POST request to users endpoint.'
    }


}
