import { TeachingComponent } from './teaching/teaching.component';
import { ResumeComponent } from './components/resume/resume.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaComponent } from './components/media/media.component';
import { PicsComponent } from './components/pics/pics.component';
import { AboutComponent } from './components/about/about.component';
import { LandingComponent } from './components/landing/landing.component';


const routes: Routes = [
  {path: "", component:LandingComponent, data:{animation: "LandingPage"}},
  {path: "About Me", component:AboutComponent, data:{animation: "other"}},
  {path: "Media", component:MediaComponent, data:{animation: "other"}},
  {path: "Contact", component:ResumeComponent, data:{animation: "other"}},
  {path: "Teaching", component:TeachingComponent, data:{animation: "other"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
