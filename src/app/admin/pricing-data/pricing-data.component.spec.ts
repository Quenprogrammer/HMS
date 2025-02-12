import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingDataComponent } from './pricing-data.component';

describe('PricingDataComponent', () => {
  let component: PricingDataComponent;
  let fixture: ComponentFixture<PricingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
