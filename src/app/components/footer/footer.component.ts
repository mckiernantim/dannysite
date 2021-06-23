import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
      url:"https://www.facebook.com/dannyyoerges",
      icon:"../../assets/icons/facebook.png"
    },
    // {
    //   text:"Twitter",
    //   url:"",
    //   icon:"../../assets/icons/twitter.png"
    // },
    {
      text:"Instagram",
      url:"https://www.instagram.com/thepipesthepipes/?hl=en",
      icon:"../../assets/icons/instagram.png"
    },
    {
      text:"Actors Access",
      url:"https://resumes.actorsaccess.com/dannyyoerges",
      icon:"../../assets/icons/AA.png"
    },
    {
      text:"Email",
      url:"mailto:dannyyoerges@gmail.com?",
      icon:"../../assets/icons/email.png"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
