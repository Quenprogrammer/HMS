import { Component } from '@angular/core';
import {ourServices} from "../../siteContent/services";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  protected readonly ourServices = ourServices;
}
