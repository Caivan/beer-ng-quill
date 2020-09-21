import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEditorExampleComponent } from './single-editor-example.component';

describe('SingleEditorExampleComponent', () => {
  let component: SingleEditorExampleComponent;
  let fixture: ComponentFixture<SingleEditorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleEditorExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEditorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
