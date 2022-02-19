import { InjectionToken } from '@angular/core';

export interface ColorThemeConfig {
  theme: undefined | 'default' | 'light' | 'dark';
  cookie?: string;
}

export const defaultColorThemeConfig = {
  theme: 'default',
  cookie: undefined,
};

export const colorThemeConfigToken = new InjectionToken<ColorThemeConfig>('defaultColorThemeConfig');
