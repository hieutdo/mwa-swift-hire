import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WindowRef } from '../services/WindowRef.service';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {
  private auth0: auth0.WebAuth;
  public userProfile: any;

  constructor(private router: Router, private winRef: WindowRef) {
    const { protocol, host } = winRef.nativeWindow.location;

    this.auth0 = new auth0.WebAuth({
      clientID: 'M4IY8Sx2VWBo9NUl2yF16IzXrnVVkAi7',
      domain: 'caas.auth0.com',
      responseType: 'token id_token',
      audience: 'https://api.swifthire.com',
      redirectUri: `${protocol}//${host}/callback`,
      scope: 'openid profile'
    });
  }

  public login(): void {
    this.auth0.authorize({});
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.winRef.nativeWindow.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public getProfile(): Promise<any> {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }
    return new Promise((resolve, reject) => {
      this.auth0.client.userInfo(accessToken, (err, profile) => {
        if (err) {
          return reject(err);
        }
        this.userProfile = profile;
        return resolve(profile);
      });
    });
  }
}
