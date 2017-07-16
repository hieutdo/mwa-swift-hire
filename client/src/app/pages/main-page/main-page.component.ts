import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  routes: Object[] = [{
    icon: 'dashboard',
    route: '.',
    title: 'Dashboard',
  }, {
    icon: 'my_library_books',
    route: '.',
    title: 'Manage Jobs',
  }, {
    icon: 'people',
    route: '.',
    title: 'Candidates',
  }];

  usermenu: Object[] = [{
    icon: 'swap_horiz',
    route: '.',
    title: 'Switch account',
  }, {
    icon: 'tune',
    route: '.',
    title: 'Account settings',
  }, {
    icon: 'exit_to_app',
    route: '.',
    title: 'Sign out',
  }];
}
