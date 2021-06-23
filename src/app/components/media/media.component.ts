import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
})
export class MediaComponent implements OnInit {
  constructor() { }
  modes:string[] = [
    "video",
    "production",
    "heads"
  ]
  mode:string
  selected: HTMLElement 
  ngOnInit(): void {
    this.mode = this.modes[2];
    console.log(this.selected)
  //  this.toggleMode(2, document.getElementById('2'))
  }
  toggleMode(num, target){
    console.log(target)
    if(this.selected){
      this.selected.classList.toggle("selected")

    }
    this.selected = target
    target.classList.toggle("selected")
    console.log(target, this.selected)
    this.mode = this.modes[num]
  }
 }
