import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {CheckboxComponent} from '../../projects/components/src/lib/checkbox/checkbox.component';
import {CheckboxModule} from '../../projects/components/src/lib/checkbox/checkbox.module';

export default {
  title: 'Prisma/Inputs/Checkbox',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CheckboxModule,
      ],
    }),
  ],
  argTypes: {
    checked: {control: 'boolean'},
    disabled: {control: 'boolean'},
  }
} as Meta;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  component: CheckboxComponent,
  props: args,
  template: `
    <pm-checkbox
      [checked]="checked"
      [disabled]="disabled"
    >
        Checkbox
    </pm-checkbox>`
});

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {
  checked: true,
  disabled: false
};

export const DisabledCheckbox = Template.bind({});
DisabledCheckbox.args = {
  checked: false,
  disabled: true
};
