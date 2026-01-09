import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateactivitiesComponent } from './updateactivities.component';

describe('UpdateactivitiesComponent', () => {
  let component: UpdateactivitiesComponent;
  let fixture: ComponentFixture<UpdateactivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateactivitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
