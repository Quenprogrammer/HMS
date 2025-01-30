import { Component } from '@angular/core';
import {doctors } from "../../siteContent/doctors";
import {TruncateTextPipe} from "../../shared/truncate-text-pipe/truncate-text.pipe";

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [
    TruncateTextPipe
  ],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss'
})
export class DoctorsComponent {

  protected readonly doctors = doctors;
}
