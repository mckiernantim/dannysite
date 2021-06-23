import { GalleryComponent } from './../gallery/gallery.component';
import { Component, OnInit } from '@angular/core';

interface Pic {
  path:string;
  color:string
}
@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styleUrls: ['./pics.component.css']
})
export class PicsComponent implements OnInit {
  pics: Pic[] =   [
    {
      path:'../../assets/images/head1.jpg',
      color:""
   },
   {
    path:'../../assets/images/head2.jpg',
    color:""
 },
 {
  path:'../../assets/images/head3.jpg',
  color:""
},
{
  path:'../../assets/images/head4.jpg',
  color:""
}]

  constructor() { }

  ngOnInit(): void {
  }

}
