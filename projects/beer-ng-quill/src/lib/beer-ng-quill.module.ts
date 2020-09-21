import { AfterViewInit, NgModule, OnInit } from '@angular/core';
import { BeerNgQuillComponent } from './beer-ng-quill.component';



@NgModule({
  declarations: [BeerNgQuillComponent],
  imports: [
  ],
  exports: [BeerNgQuillComponent]
})
export class BeerNgQuillModule implements OnInit, AfterViewInit { 
  constructor() { 
    
  }

  ngOnInit(): void {

   
  }
  ngAfterViewInit(): void {
    
  }
}
