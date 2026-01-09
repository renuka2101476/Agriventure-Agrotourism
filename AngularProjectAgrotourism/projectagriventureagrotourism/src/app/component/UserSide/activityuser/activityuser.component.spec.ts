import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityuserComponent } from './activityuser.component';

describe('ActivityuserComponent', () => {
  let component: ActivityuserComponent;
  let fixture: ComponentFixture<ActivityuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivityuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivityuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
