import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommandPaletteService} from './command-palette.service';
import {COMMAND_PALETTE_CONFIG, commandPaletteConfig, CommandPaletteConfig} from './injection';
import {DialogComponent} from './dialog/dialog.component';
import {ComponentInjectorService} from './component-injector.service';
import {TriggerButtonComponent} from './trigger-button/trigger-button.component';
import {ButtonModule} from '../../components/inputs/button/button.module';

const components = [
  DialogComponent,
  TriggerButtonComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class CommandPaletteModule {
  public static forRoot(options: CommandPaletteConfig = undefined): ModuleWithProviders<CommandPaletteModule> {
    return {
      ngModule: CommandPaletteModule,
      providers: [
        CommandPaletteService,
        ComponentInjectorService,
        {provide: COMMAND_PALETTE_CONFIG, useValue: options || commandPaletteConfig},
      ]
    };
  }
}
