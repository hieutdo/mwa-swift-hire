import { Component, OnInit } from '@angular/core';
import { TdLoadingService } from '@covalent/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  profile: any;

  constructor(private auth: AuthService, private loadingService: TdLoadingService) { }

  ngOnInit() {
    this.loadingService.register('profile.load');
    this.auth.getAuth0UserInfo()
      .then(userInfo => {
        return this.auth.getProfile(userInfo.email);
      })
      .then(profile => {
        this.profile = profile;
        this.loadingService.resolve('profile.load');
      })
      .catch((err) => {
        this.loadingService.resolve('profile.load');
        console.error(err);
      });
  }

}
