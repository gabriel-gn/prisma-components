import {MultiSelectComponent} from './multi-select.component';
import {Meta} from '@storybook/angular/types-6-0';
import {Story} from '@storybook/angular';

export default {
  title: 'Prisma/Stories/MultiSelect',
  component: MultiSelectComponent,
} as Meta;

export const Template: Story<MultiSelectComponent> = (args) => ({
  props: args,
  template: `
    <pm-multi-select
    >
    </pm-multi-select>
  `
});

export const defaultArgs = {
};

export const DefaultMultiSelect = Template.bind({});
DefaultMultiSelect.args = {
  ...defaultArgs
};
