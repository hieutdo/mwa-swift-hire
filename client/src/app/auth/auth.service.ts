import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WindowRef } from '../services/WindowRef.service';
import { environment } from '../../environments/environment';
import { AuthHttp } from 'angular2-jwt';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {
  private auth0 = new auth0.WebAuth(environment.auth0);
  public userProfile: any;

  constructor(private router: Router, private winRef: WindowRef, private authHttp: AuthHttp) {
    const lsProfile = localStorage.getItem('profile');

    if (this.isAuthenticated()) {
      this.userProfile = JSON.parse(lsProfile);
    } else if (lsProfile) {
      this.logout();
    }
  }

  public login(): void {
    this.auth0.authorize({});
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('profile');
    this.userProfile = null;
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.winRef.nativeWindow.location.hash = '';
        this.setSession(authResult);
        this.updateProfile().then(profile => {
          localStorage.setItem('profile', JSON.stringify(profile));
          this.userProfile = profile;
          this.router.navigate(['/']);
        });
      } else if (err) {
        console.error('Error occurs while authenticating', err);
        this.router.navigate(['/']);
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

  public getAuth0UserInfo(): Promise<any> {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }
    return new Promise((resolve, reject) => {
      this.auth0.client.userInfo(accessToken, (err, userInfo) => {
        if (err) {
          return reject(err);
        }
        return resolve(userInfo);
      });
    });
  }

  public async updateProfile(): Promise<any> {
    const userInfo = await this.getAuth0UserInfo();
    return this.authHttp.put(`${environment.api.baseUrl}/profile`, userInfo)
      .map(res => res.json())
      .toPromise();
  }

  public async getProfile(email: string) {
    return await this.authHttp.get(`${environment.api.baseUrl}/profile/${email}`)
      .map(res => res.json())
      .toPromise();
  }
}
