import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
import { GalleryComponent } from './components/gallery/gallery.component';

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
    Angular2ImageGalleryModule,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Angular2ImageGalleryModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
