import { InjectionToken } from '@angular/core';

export const defaultColorTheme = 'default';
export const colorThemeToken = new InjectionToken<string>(defaultColorTheme);
