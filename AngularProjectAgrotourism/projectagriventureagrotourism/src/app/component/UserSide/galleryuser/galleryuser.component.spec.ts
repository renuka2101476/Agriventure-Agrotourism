import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryuserComponent } from './galleryuser.component';

describe('GalleryuserComponent', () => {
  let component: GalleryuserComponent;
  let fixture: ComponentFixture<GalleryuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
