import { Injectable } from '@angular/core';

export const defaultTheme = {
  'color-primary': '#455363',
  'color-default': '#455363',
  'background-color': '#1f2935',
  'text-color': '#fff'
};

export const lightTheme = {
  'color-primary': '#fff',
  'color-default': '#fff',
  'background-color': '#e5e5e5',
  'text-color': '#2d2d2d'
};

export const darkTheme = {
  'color-primary': '#455363',
  'color-default': '#455363',
  'background-color': '#1f2935',
  'text-color': '#fff'
};

@Injectable()
export class ColorThemeService {

  private _theme: string = 'light';

  constructor() {
    this.theme = `${this._theme}`;
  }

  public toggle(): void {
    this.theme = this._theme === 'dark' ? 'light' : 'dark';
  }

  private set theme(theme: string) {
    this._theme = theme;

    let themeObj;
    switch (theme) {
      case 'light':
        themeObj = lightTheme;
        break;
      case 'dark':
        themeObj = darkTheme;
        break;
      default:
        themeObj = lightTheme;
        break;
    }
    Object.keys(themeObj).forEach(key =>
      document.documentElement.style.setProperty(`--${key}`, `${themeObj[key]}`, 'important')
    );
  }
}
