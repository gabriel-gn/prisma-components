import {RadioButtonComponent} from './radio-button.component';
import {Meta, Story} from '@storybook/angular';
import {OrientationEnum} from '../../../models/orientation';

export default {
  title: 'Prisma/Stories/RadioButton',
  component: RadioButtonComponent,
} as Meta;

export const Template: Story<RadioButtonComponent> = (args) => ({
  props: args,
  template: `
    <pm-radio-button
      [orientation]="orientation"
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

export const HorizontalRadioButton = Template.bind({});
HorizontalRadioButton.args = {
  ...defaultArgs,
  orientation: OrientationEnum.X,
  values: ['Winter', 'Spring', 'Summer', 'Autumn'],
  selectedValue: 'Spring'
};
