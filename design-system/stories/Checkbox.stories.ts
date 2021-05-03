import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {CheckboxComponent} from '../projects/components/src/lib/checkbox/checkbox.component';
import {CheckboxModule} from '../projects/components/src/lib/checkbox/checkbox.module';

export default {
  title: 'Prisma/Checkbox',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CheckboxModule,
      ],
    }),
  ],
  argTypes: {
    value: {control: 'boolean'},
    disabled: {control: 'boolean'},
  }
} as Meta;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  component: CheckboxComponent,
  props: args,
  template: `
    <pm-checkbox
      [value]="value"
      [disabled]="disabled"
    >
        Checkbox
    </pm-checkbox>`
});

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {
  value: true,
  disabled: false
};

export const DisabledCheckbox = Template.bind({});
DisabledCheckbox.args = {
  value: false,
  disabled: true
};
