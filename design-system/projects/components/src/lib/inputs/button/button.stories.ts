import {ButtonComponent} from './button.component';
import {Meta} from '@storybook/angular/types-6-0';
import {Story} from '@storybook/angular';
import {MainColors} from '../../../models/colors';

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
        [iconPosition]="iconPosition"
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
  iconPosition: 'start',
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

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  ...defaultArgs,
  type: MainColors.secondary
};

export const InfoButton = Template.bind({});
InfoButton.args = {
  ...defaultArgs,
  type: MainColors.info
};

export const WarningButton = Template.bind({});
WarningButton.args = {
  ...defaultArgs,
  type: MainColors.warning
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  ...defaultArgs,
  type: MainColors.danger
};

export const LightButton = Template.bind({});
LightButton.args = {
  ...defaultArgs,
  type: MainColors.light
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

export const IconButton = Template.bind({});
IconButton.args = {
  ...defaultArgs,
  type: 'primary',
  busy: false,
  busyText: 'Aguarde...',
  iconClass: 'uil uil-lg uil-arrow-to-bottom',
  outline: true,
  label: 'Download',
};
