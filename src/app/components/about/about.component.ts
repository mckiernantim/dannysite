import { Component, OnInit } from '@angular/core';

interface Pic {
  path:string,
  color:string
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  colors:string[] = [
    'purple',
    'orange',
    'green',
    'blue',
  ]
  images:Pic[] = [
    {path: "../../assets/about/elephant.jpg",
     color:this.colors[0]
   },
   {path: "../../assets/about/arches.jpg",
    color:this.colors[1]
  },
  {path: "../../assets/about/cinque.jpg",
   color:this.colors[2]
 },
 {path: "../../assets/about/waterfall.jpg",
  color:this.colors[3]
},
{path: "../../assets/about/americanGothic.jpeg",
 color:this.colors[0]
},
]

  constructor() { }
  
  ngOnInit(): void {
  }

}
