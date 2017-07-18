import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.auth.login();
      return false;
    }
    return true;
  }
}
