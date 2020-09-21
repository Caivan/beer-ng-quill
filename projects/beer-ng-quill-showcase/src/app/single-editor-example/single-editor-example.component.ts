import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-editor-example',
  templateUrl: './single-editor-example.component.html',
  styleUrls: ['./single-editor-example.component.css']
})
export class SingleEditorExampleComponent implements OnInit {
  
  editorControlValue: string;

  constructor() { }

  ngOnInit(): void {
  }

}
