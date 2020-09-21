import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerNgQuillComponent } from 'projects/beer-ng-quill/src/public-api';
import { SingleEditorExampleComponent } from './single-editor-example/single-editor-example.component';


@NgModule({
  declarations: [
    AppComponent,
    SingleEditorExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BeerNgQuillComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
