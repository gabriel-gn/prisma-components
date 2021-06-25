import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StepperModule} from '../projects/components/src/lib/stepper/stepper.module';
import {StepperComponent} from '../projects/components/src/lib/stepper/stepper.component';
import {CdkStepperModule} from '@angular/cdk/stepper';

export default {
  title: 'Prisma/Stepper',
  component: StepperComponent,
  decorators: [
    moduleMetadata({
      imports: [
        StepperModule,
        BrowserAnimationsModule,
        CdkStepperModule
      ],
    }),
  ],
  argTypes: {
    // showIndex: {control: 'boolean'},
  }
} as Meta;

const Template: Story<StepperComponent> = (args: StepperComponent) => ({
  component: StepperComponent,
  props: args,
  template: `
    <pm-stepper>
      <cdk-step> <p>This is any content of "Step 1"</p> </cdk-step>
      <cdk-step> <p>This is any content of "Step 2"</p> </cdk-step>
    </pm-stepper>`
});

export const DefaultStepper = Template.bind({});
DefaultStepper.args = {
  //
};
