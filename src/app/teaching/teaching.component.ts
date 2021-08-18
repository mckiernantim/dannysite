import { Component, OnInit } from '@angular/core';
import { teachingTexts } from './teachingText';
@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {

  constructor() { }
  text:string[] 
  canTeach:string[]
  ngOnInit(): void {
   this.text = teachingTexts[0]
   this.canTeach = teachingTexts[1]

  }

}
