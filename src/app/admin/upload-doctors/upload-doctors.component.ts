import { Component } from '@angular/core';
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-upload-doctors',
  standalone: true,
  imports: [
    NgbNavItem,
    NgbNavOutlet,
    NgbNavContent,
    NgbNavLinkBase,
    NgbNav
  ],
  templateUrl: './upload-doctors.component.html',
  styleUrl: './upload-doctors.component.scss'
})
export class UploadDoctorsComponent {
  active = 1;
}
