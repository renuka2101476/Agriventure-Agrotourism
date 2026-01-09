import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltourpackageComponent } from './alltourpackage.component';

describe('AlltourpackageComponent', () => {
  let component: AlltourpackageComponent;
  let fixture: ComponentFixture<AlltourpackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlltourpackageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlltourpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
