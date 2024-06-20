import { Component } from '@angular/core';
import { MainLogoComponent } from '../utils/main-logo/main-logo.component';

@Component({
  selector: 'app-drawer-navigation',
  standalone: true,
  imports: [MainLogoComponent],
  templateUrl: './drawer-navigation.component.html',
  styleUrl: './drawer-navigation.component.scss'
})
export class DrawerNavigationComponent {

}
