import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {ColorThemeService} from './color-theme.service';
import {ColorThemeConfig, colorThemeConfigToken, defaultColorThemeConfig} from './injection';
import {CookieService} from "ngx-cookie-service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
})
export class ColorThemeModule {
  public static forRoot(options: ColorThemeConfig = undefined): ModuleWithProviders<ColorThemeModule> {
    return {
      ngModule: ColorThemeModule,
      providers: [
        CookieService,
        ColorThemeService,
        {provide: colorThemeConfigToken, useValue: options || defaultColorThemeConfig},
      ]
    };
  }
}
