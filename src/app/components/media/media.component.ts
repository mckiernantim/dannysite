import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


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
  selected: any
  ngOnInit(): void {
    this.mode = this.modes[0];
    this.selected = document.getElementById("0")
    
  }
  toggleMode(num, target){
    console.log(num, target, this.selected)
    if(this.selected != target){
      this.selected.classList.toggle("selected")
      this.selected = target
      this.selected.classList.toggle("selected")
     
      console.log(target, this.selected)
      this.mode = this.modes[num]
    }
  }
 }
