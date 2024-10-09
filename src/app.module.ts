import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      // can inject dependencies
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        //entities: [User], // typeorm is now aware of User entity
        autoLoadEntities: true,
        synchronize: true, //automatically creates schemas->nnever use in production mode! 
        port: 5432,
        username: 'postgres',
        password: 'Jesus',
        host: 'localhost',
        database: 'nestjs-blog',
      }),// takes in a function "()=>" and returns a config object ({})
    }),
    TagsModule,
    MetaOptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
