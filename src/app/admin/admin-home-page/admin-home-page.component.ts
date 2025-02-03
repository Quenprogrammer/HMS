import { Component } from '@angular/core';
import {adminMenu} from "../../siteContent/admin";

@Component({
  selector: 'app-admin-home-page',
  standalone: true,
  imports: [],
  templateUrl: './admin-home-page.component.html',
  styleUrl: './admin-home-page.component.scss'
})
export class AdminHomePageComponent {

  protected readonly adminMenu = adminMenu;
}
