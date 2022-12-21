import {ComboBoxComponent} from './combo-box.component';
import {Meta, Story} from '@storybook/angular';

export default {
  title: 'Prisma/Stories/ComboBox',
  component: ComboBoxComponent,
} as Meta;

export const Template: Story<ComboBoxComponent> = (args) => ({
  props: args,
  template: `
    <pm-combo-box
      [items]="items"
      [disabled]="disabled"
      [selectedItem]="selectedItem"
    >
    </pm-combo-box>
  `
});

export const defaultArgs = {
  items: [],
  disabled: false,
  selectedItem: undefined
};

export const DefaultComboBox = Template.bind({});
const defaultItems = [
  {
    label: 'Value 1',
    value: 1
  },
  {
    label: 'Value 2',
    value: 2
  },
  {
    label: 'Value 3',
    value: 3
  }
];
DefaultComboBox.args = {
  ...defaultArgs,
  items: defaultItems,
  selectedItem: defaultItems[0].value
} as Partial<ComboBoxComponent>;
