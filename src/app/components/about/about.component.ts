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
  text:string[] = [
    ` In the seventh grade I sang the entirety of “Kids”
    (What’s the matter with kids today?)—downstage center—with an open fly.`,
    ` But damnit I got over it and kept at this theatre thing.
    I've gotten better at a few things, but I've sure mastered the double take.`,
    `If you want to hear more about me watch this funny video below or`
   
 ]
 list:string[]=[
  `Where I'm from: Alexandria, VA`,
    'Where I went to school: North Carolina School of the Arts (BFA)',
    'University of Illinois at Urbana-Champaign (MFA)',
    'My favorite movei: Jurassic Park',
    'My favorite Play: Jurassic Park (still waiting)',
    "Cat's name: Karen From Accounting",
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
