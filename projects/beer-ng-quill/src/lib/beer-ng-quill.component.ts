import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beer-ng-quill',
  template: `
    <div id="{{idEditor}}" name="editor" class="text-layer--viewer"> </div>
  `,
  styles: [
  ]
})
export class BeerNgQuillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
