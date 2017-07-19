import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdSelectModule,
  MdSidenavModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  MaterialModule, 
  MdDatepickerModule, 
  MdNativeDateModule 
} from '@angular/material';

import {
  CovalentCommonModule,
  CovalentDataTableModule,
  CovalentDialogsModule,
  CovalentLayoutModule,
  CovalentLoadingModule,
  CovalentMediaModule,
  CovalentMenuModule,
  CovalentNotificationsModule,
  CovalentPagingModule,
  CovalentSearchModule,
  CovalentStepsModule
} from '@covalent/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { PostjobPageComponent } from './pages/postjob-page/postjob-page.component';
import { MyoffersPageComponent } from './pages/myoffers-page/myoffers-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { JobDetailsPageComponent } from './pages/job-details-page/job-details-page.component';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { WindowRef } from './services/WindowRef.service';
import {DBService} from './pages/DBService';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
      path: 'callback',
    component: CallbackComponent
  },
  {
    path: '',
    component: MainPageComponent,
    canActivate: [AuthGuard],
    children: [
      {        
        path: 'dashboard',
        component: DashboardPageComponent
      },
      {
        path: 'postjob',
        component: PostjobPageComponent
      },
       {
        path: 'myoffers',
        component: MyoffersPageComponent
      },
      {
        path: 'profile',
        component: ProfilePageComponent
      },
      {
        path: 'jobs/:jobId',
        component: JobDetailsPageComponent
      }
    ]
  }
];

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token'))
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DashboardPageComponent,    
    PostjobPageComponent,
    MyoffersPageComponent,
    ProfilePageComponent,
    CallbackComponent,
    JobDetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdListModule,
    MdMenuModule,
    MdTooltipModule,
    MdSlideToggleModule,
    MdInputModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdSnackBarModule,
    MdSidenavModule,
    MdTabsModule,
    MdSelectModule,
    CovalentDataTableModule,
    CovalentMediaModule,
    CovalentLoadingModule,
    CovalentNotificationsModule,
    CovalentLayoutModule,
    CovalentMenuModule,
    CovalentPagingModule,
    CovalentSearchModule,
    CovalentStepsModule,
    CovalentCommonModule,
    CovalentDialogsModule,
    MaterialModule, 
    MdDatepickerModule, 
    MdNativeDateModule,    
    FormsModule, 
    ReactiveFormsModule  
  ],
  providers: [
    DBService,
    AuthService,
    AuthGuard,
    WindowRef,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
