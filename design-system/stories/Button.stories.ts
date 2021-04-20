import {ButtonComponent} from '../projects/components/src/lib/button/button.component';
import {Meta, Story} from '@storybook/angular';

export default {
  title: 'Prisma/Buttons',
  component: ButtonComponent,
  argTypes: {
    label: {control: 'text'},
    type: {control: 'select'},
    busy: {control: 'boolean'},
    busyText: {control: 'text'},
    // we need to override here since in Angular it could be null as well and therefore it would become an ambigious data type for storybook
  }
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
  template: `
    <pm-button
        [label]="label"
        [type]="type"
        [busy]="busy"
        [busyText]="busyText"
    >
        Botão
    </pm-button>`
});

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  type: 'default'
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  type: 'primary'
};

export const BusyButton = Template.bind({});
BusyButton.args = {
  type: 'primary',
  busy: true,
  busyText: 'Aguarde...'
};
