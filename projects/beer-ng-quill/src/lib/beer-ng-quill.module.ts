import { NgModule } from '@angular/core';
import { BeerNgQuillComponent } from './beer-ng-quill.component';
import Quill from 'quill';
import { ImageResize }  from '@apoiase/quill-image-resize'


@NgModule({
  declarations: [BeerNgQuillComponent],
  imports: [
  ],
  exports: [BeerNgQuillComponent]
})
export class BeerNgQuillModule { 
  constructor () {
    Quill.register('modules/imageResize', ImageResize);
  }
}
