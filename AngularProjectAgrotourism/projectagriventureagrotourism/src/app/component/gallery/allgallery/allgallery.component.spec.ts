import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllgalleryComponent } from './allgallery.component';

describe('AllgalleryComponent', () => {
  let component: AllgalleryComponent;
  let fixture: ComponentFixture<AllgalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllgalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
