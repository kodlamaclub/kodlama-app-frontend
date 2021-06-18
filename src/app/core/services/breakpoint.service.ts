import {Injectable} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

@Injectable()
export class BreakpointService {

  isMobile: boolean = false;
  isTablet: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {

    breakpointObserver
      .observe('(max-width: 600px)')
      .subscribe((data: BreakpointState) => {
        this.isMobile = data.matches;
      });

    breakpointObserver
      .observe('(max-width: 1024px)')
      .subscribe((data: BreakpointState) => {
        this.isTablet = data.matches;
      });
  }

}
