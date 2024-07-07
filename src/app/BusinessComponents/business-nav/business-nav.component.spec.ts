import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessNavComponent } from './business-nav.component';

describe('BusinessNavComponent', () => {
  let component: BusinessNavComponent;
  let fixture: ComponentFixture<BusinessNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
