import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { TdLayoutComponent, TdMediaService } from '@covalent/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements AfterViewInit {
  @ViewChild('layout')
  layout: TdLayoutComponent;

  constructor(private changeDetectorRef: ChangeDetectorRef,
              public auth: AuthService,
              public media: TdMediaService) {}

  logout() {
    this.auth.logout();
    this.layout.close();
    this.auth.login();
  }

  ngAfterViewInit(): void {
    this.media.broadcast();
    this.changeDetectorRef.detectChanges();
  }
}
