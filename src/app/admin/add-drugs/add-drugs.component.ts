import { Component } from '@angular/core';
import {drugs} from "../../siteContent/drugs";

@Component({
  selector: 'app-add-drugs',
  standalone: true,
  imports: [],
  templateUrl: './add-drugs.component.html',
  styleUrl: './add-drugs.component.scss'
})
export class AddDrugsComponent {

  protected readonly drugs = drugs;
}
