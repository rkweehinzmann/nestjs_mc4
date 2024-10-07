import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/providers/users.service';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';


@Module({
  imports: [UsersModule, PostsModule, AuthModule, TypeOrmModule.forRootAsync({
    useFactory: () => ({
      type: 'postgres',
      entities:[User],
      synchronize: true, // never use in production mode!!
      port: 5432,
      username: 'postgres',
      password: 'Jesus',
      host: 'localhost',
      database: 'nestjs-blog'
    }), 
  })],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
