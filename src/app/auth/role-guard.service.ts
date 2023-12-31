// src/app/auth/role-guard.service.ts
import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import { jwtDecode } from 'jwt-decode';
@Injectable()
export class RoleGuardService implements CanActivate {
    constructor(public auth: AuthService, public router: Router) { }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        // this will be passed from the route config
        // on the data property
        const expectedRole = route.data.expectedRole;
        const token = localStorage.getItem('token');
        // decode the token to get its payload
        const tokenPayload = jwtDecode(token);
        if (
            !this.auth.isAuthenticated() ||
            tokenPayload.aud !== expectedRole
        ) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
