import { Component, OnInit } from '@angular/core';

interface NavLink {
  text:string,
  color:string
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
links:NavLink[] = [
  {
    text:"About Me",
    color:'#f6b74c'
  },
  {
    text:"Pics",
    color:"#4991de"
  } ,
  {
    text:"Media",
    color:"#c74ce2"
  } ,
  {
    text:"Resume",
    color:"#f6b74c"
  } ,
  

]
  constructor() { }

  ngOnInit(): void {
  }

}
