import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {RouterLink} from "@angular/router";
import {moreMenu} from "../../siteContent/more";
import {NgForOf} from "@angular/common";
import {Statistic} from "../../features/homepage/homepage.component";

@Component({
  selector: 'app-admin-auth',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './admin-auth.component.html',
  styleUrl: './admin-auth.component.scss'
})
export class AdminAuthComponent implements AfterViewInit{
  @ViewChild('statisticsSection') statisticsSection!: ElementRef;

  statistics: Statistic[] = [
    { value: +1430, label: 'Records'  },
    { value: +200, label: 'Messages',  },
    { value: +10, label: 'Appointment'},
    { value: +1052, label: 'Drugs'},
    { value: +152, label: 'News and Update'},
    { value: +10, label: 'Schedules'},
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
    const duration = 8000; // Increased duration to 6000 ms (6 seconds)
    this.statistics.forEach(stat => {
      stat.animatedValue = 0; // Initialize animatedValue to 0
      const total = stat.value;
      const increment = Math.ceil(total / (duration / 50)); // Increment value
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
      }, 80); // Update every 100 milliseconds
    });
  }

   moreMenu = [
    /*{ name: "Stats", image: "adminMenu/logo36.png", link: "adminMenu/logo34.png" },*/
    { name: "Database", image: "adminMenu/database.svg", link: "/messages" },
    { name: "Messages", image: "adminMenu/messages.svg", link: "/messages" },
    { name: "Doctors", image: "adminMenu/doctors.svg", link: "/doctorsData" },
    { name: "schedules", image: "adminMenu/schedule.svg", link: "/schedulesData" },
    { name: "users", image: "adminMenu/users.svg", link: "/users" },
    { name: "Drugs", image: "adminMenu/drugs.svg", link: "/drugsData" },
    { name: "Store", image: "adminMenu/store.svg", link: "/storeData" },
    { name: "Pricing", image: "adminMenu/logo31.jpg", link: "/pricing" },
    { name: "News", image: "adminMenu/logo31.jpg", link: "/uploadNews" },
    /*{ name: "Services", image: "adminMenu/testimonials.svg", link: "/services" },*/
     // Updated link for Help Center
  ];

}
