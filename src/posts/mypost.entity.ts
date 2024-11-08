import { title } from "process";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { postType } from "./dtos/enums/postType.enum";
import { postStatus } from "./dtos/enums/postStatus.enum";
import { CreatePostMetaOptionsDto } from "../meta-options/dtos/create-post-meta-options.dto";
import { MetaOption } from "src/meta-options/meta-option.entity";

@Entity()
export class MyPost {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type:'varchar',
        length: 512,
        nullable: false,
    })
    title: string;

    @Column({
    type: 'enum',
    enum: postType,
    nullable: false,
    default: postType.POST,
    })
    postType:postType;

    @Column({
        type: 'varchar',
        length: 256,
        nullable: false,
        unique: true,

    })
    slug: string;

    @Column({
        type: 'enum',
        enum: postStatus,
        nullable: false,
        default: postStatus.DRAFT,
        })
    status: postStatus;

    @Column({
        type: 'text',
        nullable: true,
    })
    content?: string;

    @Column({
        type: 'text',
        nullable: true,
    })
    schema?: string;

    @Column({
        type: 'varchar',
        length: 1024,
        nullable: true
    })
    featuredImageUrl?: string;

    @Column({
        type: 'timestamp',
        nullable: true,
    })
    publishedOn?: Date;

    tags?: string[];

    @OneToOne(()=> MetaOption, {
        cascade: true,
        eager: true
    })
    @JoinColumn()//mandatory decorator in 1:1 rel, will create a metaoption id in post table
    metaOptions?: MetaOption;


}