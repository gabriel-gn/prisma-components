import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button.component';
import {PmButtonDirective} from "./pm-button.directive";


@NgModule({
  declarations: [
    ButtonComponent,
  ],
  exports: [
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    PmButtonDirective
  ]
})
export class ButtonModule {
}
