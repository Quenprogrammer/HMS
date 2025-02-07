import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalTagComponent } from './hospital-tag.component';

describe('HospitalTagComponent', () => {
  let component: HospitalTagComponent;
  let fixture: ComponentFixture<HospitalTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
