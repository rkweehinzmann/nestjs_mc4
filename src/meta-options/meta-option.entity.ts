import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class MetaOption{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'json', // specific to postgres: lets you save entire json in column
        nullable: false,
    })
    metaValue: string;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate;
}