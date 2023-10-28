import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { jwtConstants } from '../constants/jwt.constans';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private readonly jwtService: JwtService,
  ){}

  /**
   * This method is executed before a route is accessed.
   * It checks if the user is authenticated by verifying a JWT token.
   * @param context The execution context.
   */
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    // Get request 
    const request = context.switchToHttp().getRequest();
    
    // Extract token from request
    const token = this.extractTokenFromHeader(request);
    if(!token){
      throw new UnauthorizedException('Token not provided');
    }    

    try{
      // Verify and decode token
      const payload = await this.jwtService.verifyAsync(
        token,
        {
          secret: jwtConstants.secret
        }
      );

        request['user'] = payload;
    } catch {
      throw new UnauthorizedException('Invalid token');
    }

    return true;
  }

  /**
   * A private method to extract the token from the authorization header.
   * @param request The request object.
   * @returns The JWT token or undefined if not found.
   */
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
