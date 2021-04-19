import {ButtonComponent} from '../projects/components/src/lib/button/button.component';
import {Meta, Story} from '@storybook/angular';

export default {
  title: 'Prisma/Buttons',
  component: ButtonComponent,
  argTypes: {
    label: {control: 'text'},
    // we need to override here since in Angular it could be null as well and therefore it would become an ambigious data type for storybook
  }
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
component: ButtonComponent,
props: args,
});

export const FancyBlueButton = Template.bind({});
FancyBlueButton.args = {
  label: 'Button',
};

export const FancyPinkButton = Template.bind({});
FancyPinkButton.args = {
  label: 'Pink version',
  pink: true,
};
