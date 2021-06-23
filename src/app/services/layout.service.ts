import { BreakpointsService } from './breakpoint.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs"
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public layouts: string[]= [
    "extraSmall",
    "small",
    "medium",
    "large",
    "extraLarge"  
 ]
  public layout:string = ''
  toggleLayout(ind){
    this.layout = this.layouts[ind]
    console.log(this.layout + " !!!!!!!!!!!!!!! ")
  }

  activeBreakpoints: string[] = []
  constructor(private breakpointObserver: BreakpointObserver,
    private breakpointService: BreakpointsService) {}
    subscribeToLayoutChanges(): Observable<string[]> {
      return this.breakpointObserver
        .observe(this.breakpointService.getBreakpoints())
        .pipe(map((observeResponse) => this.parseBreakpointsResponse(observeResponse.breakpoints)));
    }
    parseBreakpointsResponse(breakpoints): string[] {
      this.activeBreakpoints = [];
    
      Object.keys(breakpoints).map((key) => {
        if (breakpoints[key]) {
          this.activeBreakpoints.push(this.breakpointService.getBreakpointName(key));
        }
      });
    
      return this.activeBreakpoints;
    }

  isBreakpointActive(breakpointName) {
    return this.activeBreakpoints.find(breakpoint => breakpoint === breakpointName);
  }
  
  }
