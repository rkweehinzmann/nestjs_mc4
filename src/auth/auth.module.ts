import { Module,forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './providers/auth/auth.service';
import { UsersService } from 'src/users/providers/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UsersService],
  imports: [forwardRef(()=> UsersModule)],
  exports:[AuthService],
})
export class AuthModule {}
