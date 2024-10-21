import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { Repository } from 'typeorm';
import { CreatePostMetaOptionsDto } from 'src/meta-options/dtos/create-post-meta-options.dto';

@Injectable()
export class MetaOptionsService {
    constructor(
        /** inject metaOptionsRepository
         */
        @InjectRepository(MetaOption)
        private readonly metaOptionsRepository: Repository<MetaOption>,
    ) {}

    public async create(createPostMetaOptionsDto: CreatePostMetaOptionsDto) {
        let metaOption = this.metaOptionsRepository.create(createPostMetaOptionsDto);    
        return await this.metaOptionsRepository.save(metaOption);    
    }


}
