import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetourpackageComponent } from './updatetourpackage.component';

describe('UpdatetourpackageComponent', () => {
  let component: UpdatetourpackageComponent;
  let fixture: ComponentFixture<UpdatetourpackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatetourpackageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatetourpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
