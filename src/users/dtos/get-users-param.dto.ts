import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class GetUsersParamDto{

    @ApiPropertyOptional({
        description: 'Get user with specific id',
    })
    @IsOptional()
    @IsInt()
    @Type(()=> Number)
    id?: number;
};
