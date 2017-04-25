import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {

  constructor() { }

  getSideNavData(): any {
    return {
      name: `Romain Marecat`,
      email: `romain.marecat@gmail.com`,
      src: `assets/images/sidenav-profile.jpg`
    };
  }

}
