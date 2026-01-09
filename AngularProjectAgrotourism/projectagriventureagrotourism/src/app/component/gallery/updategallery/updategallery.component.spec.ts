import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdategalleryComponent } from './updategallery.component';

describe('UpdategalleryComponent', () => {
  let component: UpdategalleryComponent;
  let fixture: ComponentFixture<UpdategalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdategalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdategalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
