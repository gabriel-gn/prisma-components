import {StepperComponent} from './stepper.component';
import {Meta} from '@storybook/angular/types-6-0';
import {Story} from '@storybook/angular';

export default {
  title: 'Prisma/Stories/Stepper',
  component: StepperComponent
} as Meta;

export const Template: Story<StepperComponent> = (args) => ({
  props: args,
  template: `
    <pm-stepper>
      <cdk-step> <p>This is any content of "Step 1"</p> </cdk-step>
      <cdk-step> <p>This is any content of "Step 2"</p> </cdk-step>
    </pm-stepper>
  `
});

export const defaultArgs = {};

export const DefaultStepper = Template.bind({});
DefaultStepper.args = {
  ...defaultArgs
};
