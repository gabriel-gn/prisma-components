import {MultiSelectComponent} from './multi-select.component';
import {Meta} from '@storybook/angular/types-6-0';
import {Story} from '@storybook/angular';
import {Sizes} from '../../../models/sizes';

export default {
  title: 'Prisma/Stories/MultiSelect',
  component: MultiSelectComponent,
} as Meta;

export const Template: Story<MultiSelectComponent> = (args) => ({
  props: args,
  template: `
    <pm-multi-select
        [options]="options"
        [placeholder]="placeholder"
        [borderRadius]="borderRadius"
    >
    </pm-multi-select>
  `
});

export const defaultArgs = {
  options: [],
  placeholder: '',
  borderRadius: Sizes.md
};

export const DefaultMultiSelect = Template.bind({});
DefaultMultiSelect.args = {
  ...defaultArgs,
  placeholder: 'Busque algo',
  options: [
    {label: 'Mary', value: {}},
    {label: 'Shelley', value: {}},
    {label: 'Gabs', value: {}},
    {label: 'Pedrocs', value: {}},
    {label: 'Rics', value: {}},
    {label: 'Ana', value: {}},
    {label: 'Igor', value: {}}
  ]
};
