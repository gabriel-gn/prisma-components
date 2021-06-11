import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {ComboBoxModule} from '../../projects/components/src/lib/combo-box/combo-box.module';
import {ComboBoxComponent} from '../../projects/components/src/lib/combo-box/combo-box.component';

export default {
  title: 'Prisma/Inputs/ComboBox',
  component: ComboBoxComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ComboBoxModule,
      ],
    }),
  ],
  // argTypes: {
  //   // text: {control: 'text'},
  //   // disabled: {control: 'boolean'}
  //   // we need to override here since in Angular it could be null as well and therefore it would become an ambigious data type for storybook
  // }
} as Meta;

const Template: Story<ComboBoxComponent> = (args: ComboBoxComponent) => ({
  component: ComboBoxComponent,
  props: args,
  template: `
    <pm-combo-box
        [items]="items"
    >
        Conteúdo
    </pm-combo-box>`
});

export const DefaultComboBox = Template.bind({});
DefaultComboBox.args = {
  items: [
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
  ]
};
