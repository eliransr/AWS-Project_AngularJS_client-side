import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  title: string = 'Aws app'

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    constructor(private breakpointObserver: BreakpointObserver,  
                location: Location, 
                router: Router) {
   
   
    router.events.subscribe(val => {
      if (location.path() == "/fileupload") {
        this.title = 'File uploader';
        console.log(val);        
      }
   
      //  else if (location.path() == "/authors/Eliran/0" || location.path() == "/authors"){
      //   this.title = "Authors";
      // }
  

      // else {
      //   this.title = "List of posts";
      // }
    });   
  }

}
