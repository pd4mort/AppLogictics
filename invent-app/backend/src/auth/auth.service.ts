import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';

import * as bcryptjs from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService,
    ) { }

    async register({ name, email, password }: RegisterDto) {
        const user = await this.userService.findOneByEmail(email);

        if (user) {
            throw new BadRequestException('User already exists');
        }

        await this.userService.create({
            name,
            email,
            password: await bcryptjs.hash(password, 12), //hash pass
        });

        return {
            name,
            email,
        }
    }

    async login({ email, password }) {
        const user = await this.userService.findOneByEmailWithPassword(email);
        if (!user) {
            throw new UnauthorizedException('Email not valid');
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Password not valid');
        }

        const payload = { email: user.email, name: user.name, role: user.role };

        const token = await this.jwtService.signAsync(payload);

        return  {
            token,
            email,
        };
    }

    async profile({email, role}: {email: string, role: string}){
        
        return await this.userService.findOneByEmail(email);
    }
}
