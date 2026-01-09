import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlivinghomeComponent } from './addlivinghome.component';

describe('AddlivinghomeComponent', () => {
  let component: AddlivinghomeComponent;
  let fixture: ComponentFixture<AddlivinghomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddlivinghomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddlivinghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
