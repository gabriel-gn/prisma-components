import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepperComponent} from './stepper.component';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {ButtonModule} from '../button/button.module';


@NgModule({
  declarations: [StepperComponent],
  exports: [StepperComponent],
  imports: [
    CommonModule,
    CdkStepperModule,
    ButtonModule
  ]
})
export class StepperModule {
}
