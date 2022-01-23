import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgIfLoadedDirective} from './ng-if-loaded.directive';
import {SpinnerComponent} from './spinner/spinner.component';
import {IF_LOADED_SPINNER} from './injection';
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
  // @ts-ignore
  public static forRoot(spinnerComponent: ComponentType<any> = undefined): ModuleWithProviders<NgIfLoadedModule> {
    return {
      ngModule: NgIfLoadedModule,
      providers: [
        {provide: IF_LOADED_SPINNER, useValue: spinnerComponent || SpinnerComponent},
      ]
    };
  }
}
