import { Component } from '@angular/core';
import {moreMenu} from "../../siteContent/more";
import {NgForOf} from "@angular/common";
import {products} from "../../siteContent/debug";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-more',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './more.component.html',
  styleUrl: './more.component.scss'
})
export class MoreComponent {

  protected readonly moreMenu = moreMenu;
  protected readonly products = products;
}
