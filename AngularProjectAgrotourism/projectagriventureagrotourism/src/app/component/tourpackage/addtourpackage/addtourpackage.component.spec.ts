import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtourpackageComponent } from './addtourpackage.component';

describe('AddtourpackageComponent', () => {
  let component: AddtourpackageComponent;
  let fixture: ComponentFixture<AddtourpackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddtourpackageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddtourpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
