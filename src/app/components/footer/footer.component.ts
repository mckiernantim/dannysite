import { Component, OnInit } from '@angular/core';

interface FooterLink {
  text:string,
  url:string,
  icon:string
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  links: FooterLink[] = [
    {
      text:"Facebook",
      url:"",
      icon:"../../assets/icons/facebook.png"
    },
    {
      text:"Twitter",
      url:"",
      icon:"../../assets/icons/twitter.png"
    },
    {
      text:"Instagram",
      url:"",
      icon:"../../assets/icons/instagram.png"
    },
    {
      text:"Actors Access",
      url:"",
      icon:"../../assets/icons/AA.png"
    },
    {
      text:"Email",
      url:"",
      icon:"../../assets/icons/email.png"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
