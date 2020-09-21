import { AfterViewInit, Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import Quill from 'quill';

@Component({
  selector: 'beer-ng-quill',
  template: `
    <div id="{{idEditor}}" name="editor" class="text-layer--viewer"> </div>
  `,
  styles: [
  ]
})
export class BeerNgQuillComponent implements AfterViewInit, ControlValueAccessor {

  @Input ()
  options: any;

  @Input ()
  idEditor: string;
  
  private editorValue: string;
  
  ngAfterViewInit(): void {
    this.configQuill ();
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
    let objReference = this;
    editor.on('editor-change', () => objReference.writeValue(editor.root.innerHTML));
  }

  onChange: any = () => {}
  onTouch: any = () => {}
  

  set value(val: string){
    console.log('set:',val);
    if( val !== undefined && this.editorValue !== val){
      this.editorValue = val
      this.onChange(val)
      this.onTouch(val)
    }   
  }

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
