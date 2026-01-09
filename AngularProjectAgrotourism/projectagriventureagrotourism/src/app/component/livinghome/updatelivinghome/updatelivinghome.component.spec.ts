import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelivinghomeComponent } from './updatelivinghome.component';

describe('UpdatelivinghomeComponent', () => {
  let component: UpdatelivinghomeComponent;
  let fixture: ComponentFixture<UpdatelivinghomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatelivinghomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatelivinghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
