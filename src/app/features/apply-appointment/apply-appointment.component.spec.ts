import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyAppointmentComponent } from './apply-appointment.component';

describe('ApplyAppointmentComponent', () => {
  let component: ApplyAppointmentComponent;
  let fixture: ComponentFixture<ApplyAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
