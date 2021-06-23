import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog'
import { RouterModule } from '@angular/router';
import { HeadshotsComponent } from './components/headshots/headshots.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PanelComponent } from './components/panel/panel.component';
import { AboutComponent } from './components/about/about.component';
import { MediaComponent } from './components/media/media.component';
import { PicsComponent } from './components/pics/pics.component';

import { ResumeComponent } from './components/resume/resume.component';
import { LandingComponent } from './components/landing/landing.component';
import { FooterComponent } from './components/footer/footer.component';
import { IvyGalleryModule } from 'angular-gallery';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule} from "@angular/material/toolbar"
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TeachingComponent } from './teaching/teaching.component';
import { HeaderImageComponent } from './components/header-image/header-image.component';
import { LandingDialogComponent } from './components/landing-dialog/landing-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    PanelComponent,
    AboutComponent,
    MediaComponent,
    PicsComponent,
    ResumeComponent,
    LandingComponent,
    FooterComponent,
    GalleryComponent,
    TeachingComponent,
    HeadshotsComponent,
    HeaderImageComponent,
    LandingDialogComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyGalleryModule,
    CommonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatMenuModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
