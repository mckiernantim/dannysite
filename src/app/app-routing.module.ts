import { ResumeComponent } from './components/resume/resume.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaComponent } from './components/media/media.component';
import { PicsComponent } from './components/pics/pics.component';
import { AboutComponent } from './components/about/about.component';
import { LandingComponent } from './components/landing/landing.component';


const routes: Routes = [
  {path: "", component:LandingComponent},
  {path: "About Me", component:AboutComponent},
  {path: "Pics", component:PicsComponent},
  {path: "Media", component:MediaComponent},
  {path: "Resume", component:ResumeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
