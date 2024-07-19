import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusNavComponent } from './bus-nav.component';

describe('BusNavComponent', () => {
  let component: BusNavComponent;
  let fixture: ComponentFixture<BusNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
