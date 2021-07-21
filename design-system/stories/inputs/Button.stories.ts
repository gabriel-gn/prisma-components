import {ButtonComponent} from '../../projects/components/src/lib/button/button.component';
import {Meta} from '@storybook/angular/types-6-0';
import {Story} from '@storybook/angular';
import {MainColors} from '../../projects/components/src/models/colors';

export default {
  title: 'Prisma/Inputs/Buttons/Stories',
  component: ButtonComponent,
} as Meta;

export const Template: Story<ButtonComponent> = (args) => ({
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
        Button Content
    </pm-button>
  `
});

export const defaultArgs = {
  label: '',
  type: MainColors.default,
  busy: false,
  busyText: '',
  iconClass: '',
  outline: false,
  disabled: false,
};

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  ...defaultArgs
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  ...defaultArgs,
  type: MainColors.primary
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  ...defaultArgs,
  type: 'primary',
  disabled: true
};

export const BusyButton = Template.bind({});
BusyButton.args = {
  ...defaultArgs,
  type: 'primary',
  busy: true,
  busyText: 'Aguarde...'
};

const IconButtonTemplate = (args: ButtonComponent) => ({
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
  ...defaultArgs,
  type: 'primary',
  busy: false,
  busyText: 'Aguarde...',
  iconClass: 'uil uil-lg uil-arrow-to-bottom',
  outline: true,
};
