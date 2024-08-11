import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToogleNavbarService {
  private showMiniDrawer: boolean = false;

  constructor() {}

  public get value() : boolean {
    return this.showMiniDrawer;
  }
  
  public toogleDrawer() {
    this.showMiniDrawer = !this.showMiniDrawer;
  }
}
