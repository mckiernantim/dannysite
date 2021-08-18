import { LandingDialogComponent } from './../landing-dialog/landing-dialog.component';
import { LayoutService } from './../../services/layout.service';
import { CustomBreakpointNames } from './../../services/breakpoint.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public ls: LayoutService, public dialog: MatDialog) { }

  images: string[] = [
    "../../assets/images/landing/AboutMe.png",
    "../../assets/images/landing/HeadshotImage.png",
    "../../assets/images/landing/MediaImage.png",
    "../../assets/images/landing/Resume_ReelImage.png"
  ]
  size: string [] =
  ["90%"]
  xPos:string[] = [
    "55%"
  ]
  labels: string[] = [
    "Reel",
    "Resume",
    "Headshots",
    "Contact"
  ]
  panel4:string = "background-posiition-x:-45px; background-repeat:no-repeat;"
  // colors have intentionally left open parenthetheeeeth because 
  // opacity is established later in in the template of the panel

  colors: string[] = [
    "orange",
    "blue",
    "green",
    "purple"
  ]
  offset: string[] = [
    "90%",
    "52%",
    "105%",
    "55%"
  ]
  links: string[] = [
    "Reel",
    "Resume",
    "Headshots",
    "Contact"
  ]
   
  styling:string = ""
  ngOnInit(): void {
    this.ls.subscribeToLayoutChanges().subscribe(observerResponse => {
      if (this.ls.isBreakpointActive(CustomBreakpointNames.extraSmall)) {
        this.styling = "one-column"
      }else  if (this.ls.isBreakpointActive(CustomBreakpointNames.small)) {
      
     }  else if (this.ls.isBreakpointActive(CustomBreakpointNames.medium)) {
        this.styling = "two-column"
      } else  if (this.ls.isBreakpointActive(CustomBreakpointNames.large)) {
        this.styling = "two-column"
      }
    }
    )
  }
  toggleLayout(){
  
  }
  



}
