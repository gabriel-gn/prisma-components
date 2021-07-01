import {ButtonComponent} from '../../projects/components/src/lib/button/button.component';
import {Meta, Story} from '@storybook/angular';

export default {
  title: 'Prisma/Inputs/Buttons',
  component: ButtonComponent,
  argTypes: {
    label: {control: 'text'},
    type: {control: 'select'},
    busy: {control: 'boolean'},
    busyText: {control: 'text'},
    iconClass: {control: 'text'},
    outline: {control: 'boolean'},
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
        [iconClass]="iconClass"
        [outline]="outline"
        [disabled]="disabled"
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

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  type: 'primary',
  disabled: true
};

export const BusyButton = Template.bind({});
BusyButton.args = {
  type: 'primary',
  busy: true,
  busyText: 'Aguarde...'
};

const IconButtonTemplate: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
  template: `
    <pm-button
        [label]="label"
        [type]="type"
        [busy]="busy"
        [busyText]="busyText"
        [iconClass]="iconClass"
        [outline]="outline"
    >
        Download
    </pm-button>`
});
export const IconButton = IconButtonTemplate.bind({});
IconButton.args = {
  type: 'primary',
  busy: false,
  busyText: 'Aguarde...',
  iconClass: 'uil uil-lg uil-arrow-to-bottom',
  outline: true,
};
