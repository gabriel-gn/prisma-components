import {Inject, Injectable} from '@angular/core';
import {ColorThemeConfig, colorThemeConfigToken} from './injection';
import {CookieService} from "ngx-cookie-service";

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
  private readonly themeConfig: ColorThemeConfig;
  private availableThemes = {
    default: defaultTheme,
    light: lightTheme,
    dark: darkTheme
  }

  constructor(
    @Inject(colorThemeConfigToken) initialThemeConfig: ColorThemeConfig,
    private cookieService: CookieService
  ) {
    this.themeConfig = initialThemeConfig;
    if (initialThemeConfig && initialThemeConfig.cookie) {
      let cookieTheme = this.cookieService.get(initialThemeConfig.cookie);
      cookieTheme = this.normalizeTheme(cookieTheme);
      this.theme = cookieTheme;
    } else {
      this.theme = initialThemeConfig.theme;
    }
  }

  // verifica se o tema é válido, se for usa ele. Se não for usa a config, se não for ainda usa default
  private normalizeTheme(themeString: string) {
    themeString = Object.keys(this.availableThemes).includes(themeString) ? themeString : this.themeConfig.theme;
    themeString = Object.keys(this.availableThemes).includes(themeString) ? themeString : 'default';
    return themeString;
  }

  public get theme(): string {
    return this._theme;
  }

  public set theme(theme: string) {
    theme = this.normalizeTheme(theme);
    let themeObj; // tema definido la em cima para virar variaveis de css

    const verifyTheme = (themeString) => {
      themeString = `${themeString}`.toLowerCase()
      switch (themeString) {
        case 'default':
          themeObj = this.availableThemes.default;
          break;
        case 'light':
          themeObj = this.availableThemes.light;
          break;
        case 'dark':
          themeObj = this.availableThemes.dark;
          break;
        default:
          themeObj = this.availableThemes[theme];
          break;
      }
    }

    verifyTheme(theme);
    if (this.themeConfig && this.themeConfig.cookie) {
      this.cookieService.set(this.themeConfig.cookie, theme);
    }
    Object.keys(themeObj).forEach(key => {
      if (key !== 'color-scheme') {
        document.documentElement.style.setProperty(`--${key}`, `${themeObj[key]}`, 'important')
      } else {
        document.documentElement.style.setProperty(`${key}`, `${themeObj[key]}`, 'important')
      }
    });
    this._theme = theme;
  }

  public toggle(): void {
    this.theme = this._theme === 'dark' ? 'light' : 'dark';
  }
}
