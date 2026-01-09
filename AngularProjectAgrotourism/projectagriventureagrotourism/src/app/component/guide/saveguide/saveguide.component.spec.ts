import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveguideComponent } from './saveguide.component';

describe('SaveguideComponent', () => {
  let component: SaveguideComponent;
  let fixture: ComponentFixture<SaveguideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaveguideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaveguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
