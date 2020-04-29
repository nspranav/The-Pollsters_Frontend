import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictResponseComponent } from './predict-response.component';

describe('PredictResponseComponent', () => {
  let component: PredictResponseComponent;
  let fixture: ComponentFixture<PredictResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
