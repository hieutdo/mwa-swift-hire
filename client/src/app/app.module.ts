import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
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
  MdTooltipModule
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

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        component: DashboardPageComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DashboardPageComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
