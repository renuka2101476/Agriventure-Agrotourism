import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelbookingsComponent } from './cancelbookings.component';

describe('CancelbookingsComponent', () => {
  let component: CancelbookingsComponent;
  let fixture: ComponentFixture<CancelbookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CancelbookingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancelbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
