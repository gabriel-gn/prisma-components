import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgIfLoadedDirective} from './ng-if-loaded.directive';
import {SpinnerComponent} from './spinner/spinner.component';
import {IF_LOADED_SPINNER} from './injection';
import {CommandPaletteService} from '../../services/command-palette/command-palette.service';
import {CommandPaletteEntriesService} from '../../services/command-palette/command-palette-entries.service';
import {ComponentInjectorService} from '../../services/command-palette/component-injector.service';
import {ComponentType} from '@angular/cdk/overlay';

const directives = [
  NgIfLoadedDirective,
  SpinnerComponent
];

@NgModule({
  declarations: directives,
  exports: directives,
  imports: [
    CommonModule
  ],
})
export class NgIfLoadedModule {
  public static forRoot(spinnerComponent: ComponentType<any> = undefined): ModuleWithProviders<NgIfLoadedModule> {
    return {
      ngModule: NgIfLoadedModule,
      providers: [
        CommandPaletteService,
        CommandPaletteEntriesService,
        ComponentInjectorService,
        {provide: IF_LOADED_SPINNER, useValue: spinnerComponent || SpinnerComponent},
      ]
    };
  }
}
