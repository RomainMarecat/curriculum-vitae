import { Injectable } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Injectable()
export class SidenavService {
  private _sidenav: MdSidenav;

  get sidenav(): MdSidenav {
    return this._sidenav;
  }

  set sidenav(v: MdSidenav) {
    this._sidenav = v;
  }

  constructor() { }

  toggleSidenav() {
    if (this.sidenav !== null) {
      this.sidenav.toggle();
    }
  }

  closeSidenav() {
    if (this.sidenav !== null) {
      this.sidenav.close();
    }
  }
}
