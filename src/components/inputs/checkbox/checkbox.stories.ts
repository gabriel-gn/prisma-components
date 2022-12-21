import {CheckboxComponent} from './checkbox.component';
import {Meta, Story} from '@storybook/angular';

export default {
  title: 'Prisma/Stories/Checkbox',
  component: CheckboxComponent,
} as Meta;

export const Template: Story<CheckboxComponent> = (args) => ({
  props: args,
  template: `
    <pm-checkbox
      [checked]="checked"
      [disabled]="disabled"
    >
        Checkbox
    </pm-checkbox>
  `
});

export const defaultArgs = {
  checked: false,
  disabled: false,
  selectedItem: undefined,
};

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {
  ...defaultArgs
} as Partial<CheckboxComponent>;

export const DisabledCheckbox = Template.bind({});
DisabledCheckbox.args = {
  ...defaultArgs,
  checked: true,
  disabled: true
} as Partial<CheckboxComponent>;
