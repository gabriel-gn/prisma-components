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
    <mat-card class="card-wrapper">
    <pm-multi-select
      [placeholder]="placeholder"
      [key]="key"
      [data]="data"
    >
    </pm-multi-select>
    </mat-card>
  `
});

export const defaultArgs = {
  data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  placeholder: 'Select Items Here ...',
  key: 'options',
};

export const DefaultMultiSelect = Template.bind({});
DefaultMultiSelect.args = {
  ...defaultArgs
};
