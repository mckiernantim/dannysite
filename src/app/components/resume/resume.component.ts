import { Component, OnInit } from '@angular/core';

const url:string = "../../assets/images/"

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})


export class ResumeComponent implements OnInit {
  images:any = { 
    cvDesktop:`${url}cvImage.png`,
    cvMobile:`${url}cvMobile.jpg`,
    headshotsDesktop:`${url}headshotsDesktop.jpg`,
    headshotsMobile:`${url}headshotsMobile.jpg`,
    resumeDesktop:`${url}resumeImage.png`,
    resumeMobile:`${url}resumeMobile.jpg`
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
