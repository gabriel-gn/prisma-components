import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {ColorThemeService} from './color-theme.service';
import {colorThemeToken, defaultColorTheme} from './injection';

export interface ColorThemeModuleConfig {
  theme?: string;
}

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
})
export class ColorThemeModule {
  public static forRoot(options: ColorThemeModuleConfig = {}): ModuleWithProviders<ColorThemeModule> {
    return {
      ngModule: ColorThemeModule,
      providers: [
        ColorThemeService,
        {provide: colorThemeToken, useValue: options.theme || defaultColorTheme},
      ]
    };
  }
}
