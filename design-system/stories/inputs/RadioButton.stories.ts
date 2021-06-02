import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {RadioButtonModule} from '../../projects/components/src/lib/radio-button/radio-button.module';
import {RadioButtonComponent} from '../../projects/components/src/lib/radio-button/radio-button.component';

export default {
  title: 'Prisma/Inputs/Radio Button',
  component: RadioButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        RadioButtonModule,
      ],
    }),
  ],
  argTypes: {
    orientation: {control: 'enum'}
    // we need to override here since in Angular it could be null as well and therefore it would become an ambigious data type for storybook
  }
} as Meta;

const Template: Story<RadioButtonComponent> = (args: RadioButtonComponent) => ({
  component: RadioButtonComponent,
  props: args,
  template: `
    <pm-radio-button
        [values]="values"
        [selectedValue]="selectedValue"
    >
        Conteúdo
    </pm-radio-button>`
});

export const DefaultRadioButton = Template.bind({});
DefaultRadioButton.args = {
  values: ['Winter', 'Spring', 'Summer', 'Autumn'],
  selectedValue: 'Spring'
};
