
import { Injectable } from '@angular/core';


export const CustomBreakpointNames = {
  extraSmall: 'extraSmall',
  small:'small',
  medium:'medium',
  large:'large',
  extraLarge: 'extraLarge'
};
@Injectable({
  providedIn: 'root'
})
export class BreakpointsService {
  breakpoints: object = {
    '(max-width: 220px)': CustomBreakpointNames.extraSmall,
    '(max-width: 480px)': CustomBreakpointNames.small,
    '(max-width: 1200x)': CustomBreakpointNames.medium,
    '(max-width:2399px)': CustomBreakpointNames.large,
    '(min-width: 2400px)': CustomBreakpointNames.extraLarge
  };

  getBreakpoints(): string[] {
    return Object.keys(this.breakpoints);
  }

  getBreakpointName(breakpointValue): string {
    return this.breakpoints[breakpointValue];
  }

  constructor() {
  }
}