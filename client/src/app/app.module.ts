import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TagInputModule } from 'ngx-chips';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
} from '@angular/material';

import {
  CovalentCommonModule,
  CovalentDataTableModule,
  CovalentDialogsModule,
  CovalentFileModule,
  CovalentLayoutModule,
  CovalentLoadingModule,
  CovalentMediaModule,
  CovalentMenuModule,
  CovalentMessageModule,
  CovalentNotificationsModule,
  CovalentPagingModule,
  CovalentSearchModule,
  CovalentStepsModule
} from '@covalent/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { CandidatePageComponent } from './pages/candidate-page/candidate-page/candidate-page.component';
import { CandidateJobsComponent } from './pages/candidate-page/candidate-jobs/candidate-jobs.component';
import { CandidateResumeComponent } from './pages/candidate-page/candidate-resume/candidate-resume.component';
import { PostjobPageComponent } from './pages/postjob-page/postjob-page.component';
import { MyoffersPageComponent } from './pages/myoffers-page/myoffers-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { JobDetailsPageComponent } from './pages/job-details-page/job-details-page.component';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { WindowRef } from './services/WindowRef.service';
import { DBService } from './services/db.service';
import { JobService } from './services/job.service';

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
        path: '',
        component: DashboardPageComponent
      },
      { path: 'candidate', component: CandidatePageComponent },
      { path: 'candidate/jobs', component: CandidateJobsComponent },
      { path: 'candidate/resume', component: CandidateResumeComponent },
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
    CandidatePageComponent,
    CandidateJobsComponent,
    CandidateResumeComponent,
    DashboardPageComponent,
    DashboardPageComponent,
    PostjobPageComponent,
    MyoffersPageComponent,
    ProfilePageComponent,
    CallbackComponent,
    JobDetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    MdSliderModule,
    MdSlideToggleModule,
    MdInputModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdSnackBarModule,
    MdSidenavModule,
    MdTabsModule,
    MdSelectModule,
    MdDatepickerModule,
    MdNativeDateModule,
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
    CovalentMessageModule,
    FormsModule,
    ReactiveFormsModule,
    CovalentFileModule,
    TagInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    FormsModule,
  ],
  providers: [
    DBService,
    AuthService,
    AuthGuard,
    WindowRef,
    JobService,
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
