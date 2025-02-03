import { Component } from '@angular/core';
import {moreMenu} from "../../siteContent/more";

@Component({
  selector: 'app-more',
  standalone: true,
  imports: [],
  templateUrl: './more.component.html',
  styleUrl: './more.component.scss'
})
export class MoreComponent {

  protected readonly moreMenu = moreMenu;
}
