import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
messageSample=[
  {name:'Adamu adamu', email:'adamsadam@gmail.com', phone:'09036014519',
  message:'this is sample message for testing database design'
  }
]
}
