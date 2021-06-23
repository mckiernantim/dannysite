import { slideInAnimation } from './route-animations';
import { RouterOutlet } from '@angular/router';
import { LayoutService } from './services/layout.service';
import { CustomBreakpointNames } from './services/breakpoint.service';
import { Component, OnInit, OnDestroy } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[slideInAnimation]
})
export class AppComponent implements OnInit, OnDestroy {
  

  constructor(public ls:LayoutService ) {}
  title = 'DannyYoerges';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  ngOnInit(): void {
    let check = this.ls.isBreakpointActive
    this.ls.subscribeToLayoutChanges().subscribe(observerResponse => {
      // You will have all matched breakpoints in observerResponse
      if (this.ls.isBreakpointActive(CustomBreakpointNames.extraSmall)) {
        console.log("extra small")
        this.ls.toggleLayout(0)
      } else if (this.ls.isBreakpointActive(CustomBreakpointNames.small)){
        this.ls.toggleLayout(1)
              console.log("small")
      } else if( this.ls.isBreakpointActive(CustomBreakpointNames.medium)){
        this.ls.toggleLayout(2)
              console.log("extra medium")
      } else if( this.ls.isBreakpointActive(CustomBreakpointNames.large)){
        this.ls.toggleLayout(3)
              console.log("extra large")
      } else if (this.ls.isBreakpointActive(CustomBreakpointNames.extraLarge)){
        this.ls.toggleLayout(4)
              console.log("extra large")
      }
    });
  }
  
  ngOnDestroy(){

  }
 
}
