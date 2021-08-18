import { BreakpointsService } from './../../services/breakpoint.service';
import { Component, Input, OnInit } from '@angular/core';

interface stylesObj {
  imageIndex:number,
  titleText:string,
  color:string,
  xOffset:string,
  yOffset:string,
  height:string;
  
}
@Component({
  selector: 'app-header-image',
  templateUrl: './header-image.component.html',
  styleUrls: ['./header-image.component.css']
})

export class HeaderImageComponent implements OnInit {
  @Input()styleObj:stylesObj 
  constructor(private breakPoints:BreakpointsService) { }
  ngOnInit(): void {}
}
