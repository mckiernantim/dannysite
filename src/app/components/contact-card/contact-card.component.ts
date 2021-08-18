import { Component, OnInit, Input} from '@angular/core';
interface image {
  url:string
}

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})

export class ContactCardComponent implements OnInit {
  @Input() columns:string;
  @Input() styles:string;

  constructor() { }
  images:image[]
  ngOnInit(): void {
    this.images = [{
      url: "../../../assets/images/LB.jpeg"},
      {
      url:"../../assets/images/comicMobile.jpg"
    }
  ]
  console.log(this.styles)
  }

}
