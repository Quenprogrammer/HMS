import { Component } from '@angular/core';
import {NewsCardComponent} from "../news/news-card/news-card.component";

import {NgForOf, NgIf} from "@angular/common";
import {ContactUsComponent} from "../contact-us/contact-us.component";
import {DoctorsComponent} from "../doctors/doctors.component";
import {SchedulesComponent} from "../schedules/schedules.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [

    NgForOf,

    NgIf,
    SchedulesComponent,
    RouterLink
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
