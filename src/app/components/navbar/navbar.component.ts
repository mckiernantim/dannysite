import { Component, OnInit } from '@angular/core';
import { MatMenuModule} from '@angular/material/menu';
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
menuHidden:boolean = false;
showFiller:boolean = true
links:NavLink[] = [
  {
    text:"About Me",
    color:'#f6b74c'
  },
  {
    text:"Teaching",
    color:"#4991de"
  } ,
  {
    text:"Media",
    color:"#7ed320"
   
  } ,
  {
    text:"Contact",
    color:"#c74ce2"
  
  },
 
]
  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu(){
    this.menuHidden === false ? 
      this.menuHidden = true : 
      this.menuHidden === true ? 
      this.menuHidden = false : 
      this.menuHidden
      console.log(this.menuHidden)
  }

}
