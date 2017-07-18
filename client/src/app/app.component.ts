import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService,
              private iconRegistry: MdIconRegistry,
              private domSanitizer: DomSanitizer) {

    auth.handleAuthentication();

    this.addSvgIcon('assets', 'github', 'assets/icons/github.svg');
    this.addSvgIcon('assets', 'covalent-black', 'assets/icons/covalent-black.svg');
    this.addSvgIcon('assets', 'covalent-mark', 'assets/icons/covalent-mark.svg');
  }

  addSvgIcon(namespace: string, iconName: string, url: string) {
    this.iconRegistry.addSvgIconInNamespace(
      namespace,
      iconName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(url)
    );
  }
}
