import { LayoutService } from './../../services/layout.service';
import { Component, OnInit, Input } from '@angular/core';
import { Gallery } from 'angular-gallery'

interface Pic {
  path:string;
  color:string
}
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
@Input() pics:Pic[] = []
  constructor(private gallery:Gallery) { }
  colors:string[] = [
    'purple',
    'orange',
    'green',
    'blue',
  ]
  imgs:any[] = [];
  

   ngOnInit(): void {
    let counter = 0
    for(let i=0; i<this.pics.length;i++){
      if(counter > 3){
        counter = 0
      }
      counter++
      this.imgs.push({path:this.pics[i].path})
    
  }
  console.log(this.pics)
 
   }

  showGallery(index:number, ) {
        let prop = {
        images:this.imgs,
        index,
       };
    console.log(prop)
    this.gallery.load(prop);
}
}