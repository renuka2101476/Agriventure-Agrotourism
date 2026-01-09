import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlladminComponent } from './alladmin.component';

describe('AlladminComponent', () => {
  let component: AlladminComponent;
  let fixture: ComponentFixture<AlladminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlladminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlladminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
