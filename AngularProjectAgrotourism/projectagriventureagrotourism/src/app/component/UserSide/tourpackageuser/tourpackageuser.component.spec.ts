import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourpackageuserComponent } from './tourpackageuser.component';

describe('TourpackageuserComponent', () => {
  let component: TourpackageuserComponent;
  let fixture: ComponentFixture<TourpackageuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TourpackageuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourpackageuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
