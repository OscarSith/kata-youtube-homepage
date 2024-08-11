import { Component } from '@angular/core';
import { ToogleNavbarService } from './../../../services/toogle-navbar.service';

@Component({
  selector: 'app-main-logo',
  standalone: true,
  imports: [],
  templateUrl: './main-logo.component.html',
  styleUrl: './main-logo.component.scss'
})
export class MainLogoComponent {
  constructor(public toggleDrawerService: ToogleNavbarService) {}

  toggle() {
    this.toggleDrawerService.toogleDrawer();
  }
}
