import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerNgQuillComponent } from './beer-ng-quill.component';

describe('BeerNgQuillComponent', () => {
  let component: BeerNgQuillComponent;
  let fixture: ComponentFixture<BeerNgQuillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerNgQuillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerNgQuillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
