import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinguserComponent } from './bookinguser.component';

describe('BookinguserComponent', () => {
  let component: BookinguserComponent;
  let fixture: ComponentFixture<BookinguserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookinguserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookinguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
