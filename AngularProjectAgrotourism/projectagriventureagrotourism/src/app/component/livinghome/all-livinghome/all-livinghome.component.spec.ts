import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLivinghomeComponent } from './all-livinghome.component';

describe('AllLivinghomeComponent', () => {
  let component: AllLivinghomeComponent;
  let fixture: ComponentFixture<AllLivinghomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllLivinghomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllLivinghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
