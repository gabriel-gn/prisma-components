import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepperComponent} from './stepper.component';
import {CdkStepper, CdkStepperModule} from '@angular/cdk/stepper';
import {ButtonModule} from '../../inputs/button/button.module';

@NgModule({
  declarations: [StepperComponent],
  exports: [StepperComponent],
  imports: [
    CommonModule,
    CdkStepperModule,
    ButtonModule
  ],
  providers: [
    CdkStepper
  ]
})
export class StepperModule {
}
