import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Role } from '../../common/enums/rol.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  /**
   * This method is executed before a route is accessed.
   * It checks if the user has the required role specified in the metadata.
   * @param context The execution context.
   */
  canActivate(context: ExecutionContext): boolean {
    // Get the role from the metadata if it's defined
    const role = this.reflector.getAllAndOverride<Role>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!role) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    if (user.role === Role.SUPERADMIN) {
      return true;
    }

    return role === user.role;
  }
}
