import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateguideComponent } from './updateguide.component';

describe('UpdateguideComponent', () => {
  let component: UpdateguideComponent;
  let fixture: ComponentFixture<UpdateguideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateguideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
