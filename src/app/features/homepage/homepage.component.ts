import {Component, ElementRef, ViewChild} from '@angular/core';
import {NewsCardComponent} from "../news/news-card/news-card.component";

import {NgForOf, NgIf} from "@angular/common";
import {ContactUsComponent} from "../contact-us/contact-us.component";
import {DoctorsComponent} from "../doctors/doctors.component";
import {SchedulesComponent} from "../schedules/schedules.component";
import {RouterLink} from "@angular/router";
import {doctors} from "../../siteContent/doctors";
import {News} from "../news/news";
import {TruncateTextPipe} from "../../shared/truncate-text-pipe/truncate-text.pipe";
export interface Statistic {
  value: number;
  label: string;
  animatedValue?: number; // Optional property for animated value
}

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [

    NgForOf,

    NgIf,
    SchedulesComponent,
    RouterLink,
    TruncateTextPipe
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  @ViewChild('statisticsSection') statisticsSection!: ElementRef;

  statistics: Statistic[] = [
    { value: +430, label: 'Farmers'  },
    { value: +13, label: 'Local Governments',  },
    { value: +52, label: 'Clusters'},
  ];

  private isAnimated: boolean = false; // Flag to check if animation has started

  ngAfterViewInit(): void {
    this.createObserver();
  }

  private createObserver(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.isAnimated) {
          this.animateStatistics(); // Start the animation
          this.isAnimated = true; // Set the flag to true to avoid re-triggering
          observer.unobserve(entry.target); // Stop observing once the animation starts
        }
      });
    });

    observer.observe(this.statisticsSection.nativeElement); // Observe the section
  }

  private animateStatistics(): void {
    const duration = 2000; // Increased duration to 6000 ms (6 seconds)
    this.statistics.forEach(stat => {
      stat.animatedValue = 0; // Initialize animatedValue to 0
      const total = stat.value;
      const increment = Math.ceil(total / (duration / 100)); // Increment value
      let current = 0;

      const interval = setInterval(() => {
        if (current < total) {
          current += increment; // Increase current value
          if (current > total) {
            current = total; // Ensure it does not exceed the total
          }
          stat.animatedValue = current; // Update animatedValue
        } else {
          clearInterval(interval); // Clear interval when done
        }
      }, 100); // Update every 100 milliseconds
    });
  }

  protected readonly doctors = doctors.slice(0,2);
  protected readonly News = News.slice(0,3);
}
