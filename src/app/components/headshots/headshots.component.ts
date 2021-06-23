import { Component, OnInit, Input} from '@angular/core';

interface Pic {
  path:string,
  color:string
}
@Component({
  selector: 'app-headshots',
  templateUrl: './headshots.component.html',
  styleUrls: ['./headshots.component.css']
})

export class HeadshotsComponent implements OnInit {
  
     constructor() { }
     heads: Pic[]=[
      {
        path:'../../assets/Headshots/legitS.jpg',
        color:""
     },
     {
      path:'../../assets/Headshots/legits2.jpg',
      color:""
    },
    {
      path:'../../assets/Headshots/shortC.jpg',
      color:""
    },
    {
      path:'../../assets/Headshots/longC.jpg',
      color:""
    },
    {
      path:'../../assets/Headshots/longL.jpg',
      color:""
    },
    {
      path:'../../assets/Headshots/longL2.jpg',
      color:""
    },
    {
      path:'../../assets/Headshots/IMG_8459.jpeg',
      color:""
    },
    {
      path:'../../assets/Headshots/IMG_9560.jpeg',
      color:""
    },
    {
      path:'../../assets/Headshots/IMG_9674.jpeg',
      color:""
    },
    {
      path:'../../assets/Headshots/IMG_9717.JPG',
      color:""
    },
    {
      path:'../../assets/Headshots/IMG_9757.jpeg',
      color:""
    },
    ]
  ngOnInit(): void {
  }

}
