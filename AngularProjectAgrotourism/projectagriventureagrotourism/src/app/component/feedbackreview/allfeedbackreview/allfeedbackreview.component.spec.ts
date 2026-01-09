import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfeedbackreviewComponent } from './allfeedbackreview.component';

describe('AllfeedbackreviewComponent', () => {
  let component: AllfeedbackreviewComponent;
  let fixture: ComponentFixture<AllfeedbackreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllfeedbackreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllfeedbackreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
