import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivinghomeuserComponent } from './livinghomeuser.component';

describe('LivinghomeuserComponent', () => {
  let component: LivinghomeuserComponent;
  let fixture: ComponentFixture<LivinghomeuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LivinghomeuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LivinghomeuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
