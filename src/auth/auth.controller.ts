import { Controller } from '@nestjs/common';
import { AuthService } from './providers/auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        // injecting auth Service 
        public readonly authService: AuthService,
    ){}
}
