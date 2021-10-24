import {Inject, Injectable} from '@angular/core';
import {colorThemeToken} from './injection';

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

  private _theme: string;

  constructor(
    @Inject(colorThemeToken) initialTheme: any
  ) {
    this.theme = initialTheme;
  }

  private set theme(theme: string) {
    this._theme = theme;

    let themeObj;
    switch (theme) {
      case 'default':
        themeObj = defaultTheme;
        break;
      case 'light':
        themeObj = lightTheme;
        break;
      case 'dark':
        themeObj = darkTheme;
        break;
      default:
        themeObj = defaultTheme;
        break;
    }
    Object.keys(themeObj).forEach(key =>
      document.documentElement.style.setProperty(`--${key}`, `${themeObj[key]}`, 'important')
    );
  }

  public toggle(): void {
    this.theme = this._theme === 'dark' ? 'light' : 'dark';
  }
}
