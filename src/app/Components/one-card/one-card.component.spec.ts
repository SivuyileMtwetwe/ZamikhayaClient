import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCardComponent } from './one-card.component';

describe('OneCardComponent', () => {
  let component: OneCardComponent;
  let fixture: ComponentFixture<OneCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OneCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
