import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGuideComponent } from './all-guide.component';

describe('AllGuideComponent', () => {
  let component: AllGuideComponent;
  let fixture: ComponentFixture<AllGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllGuideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
