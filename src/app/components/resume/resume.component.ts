import { Component, OnInit } from '@angular/core';

const url:string = "../../assets/images/Website/Resume_CV/buttonImages/"

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})


export class ResumeComponent implements OnInit {
  images:any = { 
    cvDesktop:`${url}cvDesktop.jpg`,
    cvMobile:`${url}cvMobile.jpg`,
    headshotsDesktop:`${url}headshotsDesktop.jpg`,
    headshotsMobile:`${url}headshotsMobile.jpg`,
    resumeDesktop:`${url}resumeDesktop.jpg`,
    resumeMobile:`${url}resumeMobile.jpg`
  }

  constructor() { }

  ngOnInit(): void {
  }

}
