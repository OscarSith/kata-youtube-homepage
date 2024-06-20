import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './MainLayout/header/header.component';
import { DrawerNavigationComponent } from './MainLayout/drawer-navigation/drawer-navigation.component';
import { MiniGuideDrawerComponent } from './MainLayout/mini-guide-drawer/mini-guide-drawer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    DrawerNavigationComponent,
    MiniGuideDrawerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
