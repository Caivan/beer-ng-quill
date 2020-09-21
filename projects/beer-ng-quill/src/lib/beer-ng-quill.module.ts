import { AfterViewInit, Input, NgModule, OnInit } from '@angular/core';
import { BeerNgQuillComponent } from './beer-ng-quill.component';
import Quill from 'quill';


@NgModule({
  declarations: [BeerNgQuillComponent],
  imports: [
  ],
  exports: [BeerNgQuillComponent]
})
export class BeerNgQuillModule implements OnInit, AfterViewInit { 

  @Input ()
  options: any;

  @Input ()
  idEditor: string;
  
  constructor() { 
    
  }

  ngOnInit(): void {

   
  }
  ngAfterViewInit(): void {
    
  }

  configQuill () {

    let opts = {
      debug: 'info',
      modules: {
        toolbar:  [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['image', 'code-block']
        ],
        imageResize: {}
      },
      placeholder: 'Compose an epic...',
      readOnly: false,
      theme: 'snow'
    };

    if (this.options) {
      opts = this.options;
    }
        
    const editor = new Quill(('#'+this.idEditor), opts);
    
  }
}
