import { Component } from '@angular/core';
import {HospitalTagComponent} from "../../core/components/hospital-tag/hospital-tag.component";

@Component({
  selector: 'app-schedules',
  standalone: true,
  imports: [
    HospitalTagComponent
  ],
  templateUrl: './schedules.component.html',
  styleUrl: './schedules.component.scss'
})
export class SchedulesComponent {

}
