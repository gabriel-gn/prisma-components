import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommandPaletteService} from './command-palette.service';
import {COMMAND_PALETTE_CONFIG, commandPaletteConfig, CommandPaletteConfig} from './injection';
import {DialogComponent, ResultSearchElements} from './dialog/dialog.component';
import {ComponentInjectorService} from './component-injector.service';
import {TriggerButtonComponent} from './trigger-button/trigger-button.component';
import {ButtonModule} from '../../components/inputs/button/button.module';
import {HotkeyModule} from 'angular2-hotkeys';
import {FormsModule} from '@angular/forms';
import {CommandPaletteEntriesService} from './command-palette-entries.service';

const components = [
  DialogComponent,
  TriggerButtonComponent,
  ResultSearchElements
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    ButtonModule,
    HotkeyModule,
    FormsModule
  ]
})
export class CommandPaletteModule {
  public static forRoot(options: CommandPaletteConfig = undefined): ModuleWithProviders<CommandPaletteModule> {
    return {
      ngModule: CommandPaletteModule,
      providers: [
        CommandPaletteService,
        CommandPaletteEntriesService,
        ComponentInjectorService,
        {provide: COMMAND_PALETTE_CONFIG, useValue: options || commandPaletteConfig},
      ]
    };
  }
}
