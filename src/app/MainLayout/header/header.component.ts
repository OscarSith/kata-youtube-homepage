import { Component, OnInit } from '@angular/core';
// import { NgClass } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { MainLogoComponent } from '../utils/main-logo/main-logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchBoxComponent, MainLogoComponent], // NgClass
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  MENUS = {
    NEW_VIDEO: 'newVideo',
    NOTIFICATION: 'notification',
    PERFIL: 'perfil',
  };
  subMenus: Map<string, string> = new Map;

  ngOnInit(): void {
    this.subMenus.set(this.MENUS.NEW_VIDEO, '');
    this.subMenus.set(this.MENUS.NOTIFICATION, '');
    this.subMenus.set(this.MENUS.PERFIL, '');

    document.addEventListener('click', (event) => this.closeWidgetsOnClickDocument(event));
  }

  handleOpenSubMenu(submenu: string): void {
    const currentSubMenu = this.subMenus.get(submenu);
    this.subMenus.set(submenu, currentSubMenu === '' ? 'display: block' : '');

    if (currentSubMenu === '') {
      this.closeWidgetsWhenClickOther(submenu);
    }
  }

  private closeWidgetsOnClickDocument(event: MouseEvent): void {
    const element = event.target as HTMLElement;
    const closestElement = element.closest('.new-video-action');
    const closestElementNotification = element.closest('.notifications-content');
    const closestElementPerfil = element.closest('.submenu-perfil');
    const isTriggerButton = element.closest('button')?.className.split(' ').some(cssClass => /btn-default/.test(cssClass));

    if (!closestElement && !isTriggerButton && this.subMenus.get(this.MENUS.NEW_VIDEO) !== '') {
      this.handleOpenSubMenu(this.MENUS.NEW_VIDEO);
    } else if (!closestElementNotification && !isTriggerButton && this.subMenus.get(this.MENUS.NOTIFICATION) !== '') {
      this.handleOpenSubMenu(this.MENUS.NOTIFICATION);
    } else if (!closestElementPerfil && !isTriggerButton && this.subMenus.get(this.MENUS.PERFIL) !== '') {
      this.handleOpenSubMenu(this.MENUS.PERFIL);
    }
  }

  private closeWidgetsWhenClickOther(except: string): void {
    const menus = this.subMenus.entries();
    for (let menu of menus) {
      if (menu[0] !== except) {
        this.subMenus.set(menu[0], '');
      }
    }
  }
}
