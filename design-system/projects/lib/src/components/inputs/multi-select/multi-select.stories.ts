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
    {label: 'Mary', value: {} },
    {label: 'Shelley', value: {} },
    {label: 'Gabs', value: {} },
    {label: 'Pedrocs', value: {} },
    {label: 'Rics', value: {} },
    {label: 'Ana', value: {} },
    {label: 'Igor', value: {} }
  ]
};

export const ThumbnailMultiSelect = Template.bind({});
ThumbnailMultiSelect.args = {
  ...defaultArgs,
  placeholder: 'Busque algo',
  options: [
    {
      label: 'Arkansas',
      value: '2.978M',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      label: 'California',
      value: '39.14M',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
      label: 'Florida',
      value: '20.27M',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      label: 'Texas',
      value: '27.47M',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ]
};
