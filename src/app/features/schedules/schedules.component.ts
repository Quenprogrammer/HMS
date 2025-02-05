import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {hospital_schedule} from "../../siteContent/schedules";

@Component({
  selector: 'app-schedules',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './schedules.component.html',
  styleUrl: './schedules.component.scss'
})
export class SchedulesComponent {

  protected readonly hospital_schedule = hospital_schedule;
  sortScheduleByDay(): void {
    this.hospital_schedule.sort((a, b) => {
      const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      return days.indexOf(a.day) - days.indexOf(b.day);
    });
  }
}
