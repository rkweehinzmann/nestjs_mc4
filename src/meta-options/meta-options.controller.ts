import { Body, Controller } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto';
import { MetaOptionsService } from './providers/meta-options/meta-options.service';

@Controller('meta-options')
export class MetaOptionsController {

    constructor(
        /**
         * Inject MetaOptionsService
         */
        private readonly metaOptionsService: MetaOptionsService,
    ){}
    @Post()
    public create(@Body() createPostMetaOptionsDto:CreatePostMetaOptionsDto){
        return this.metaOptionsService.create(createPostMetaOptionsDto);
    }
}   
