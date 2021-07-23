import {OrientationEnum, RadioButtonComponent} from './radio-button.component';
import {Meta} from '@storybook/angular/types-6-0';
import {Story} from '@storybook/angular';

export default {
  title: 'Prisma/Stories/RadioButton',
  component: RadioButtonComponent,
} as Meta;

export const Template: Story<RadioButtonComponent> = (args) => ({
  props: args,
  template: `
    <pm-radio-button
      [values]="values"
      [selectedValue]="selectedValue"
      [disabled]="disabled"
    >
    </pm-radio-button>
  `
});

export const defaultArgs = {
  orientation: OrientationEnum.Y,
  values: [],
  disabled: false,
  selectedValue: undefined
};

export const DefaultRadioButton = Template.bind({});
DefaultRadioButton.args = {
  ...defaultArgs,
  values: ['Winter', 'Spring', 'Summer', 'Autumn'],
  selectedValue: 'Spring'
};
