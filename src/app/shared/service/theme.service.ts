import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {
  themeName: string;

  constructor() {
    this.themeName = 'dark-app-theme';
  }

  toggleTheme(): string {
    return this.themeName = this.themeName === 'dark-app-theme' ? 'candy-app-theme' : 'dark-app-theme';
  }
}
