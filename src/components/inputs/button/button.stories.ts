import {ButtonComponent} from './button.component';
import {Meta, Story} from '@storybook/angular';
import {MainColors} from '../../../models/colors';

export default {
  title: 'Prisma/Inputs/Buttons/Stories',
  component: ButtonComponent,
} as Meta;

export const Template: Story<ButtonComponent> = (args) => ({
  props: args,
  template: `
    <pm-button
        #btn
        (click)="btn.logEvent($event)"
        [label]="label"
        [type]="type"
        [busy]="busy"
        [busyText]="busyText"
        [iconClass]="iconClass"
        [iconPosition]="iconPosition"
        [outline]="outline"
        [disabled]="disabled"
        [size]="size"
        [fillWidth]="fillWidth"
        [justifyContent]="justifyContent"
    >
        Button Content
    </pm-button>
  `
});

export function logEvent(event: any) {
  console.log(event);
}

export const defaultArgs = {
  label: '',
  type: MainColors.default,
  busy: false,
  busyText: '',
  iconClass: '',
  iconPosition: 'start',
  outline: false,
  disabled: false,
  size: 'md',
  fillWidth: false,
  justifyContent: 'center'
};

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  ...defaultArgs
} as Partial<ButtonComponent>;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  ...defaultArgs,
  type: MainColors.primary
} as Partial<ButtonComponent>;

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  ...defaultArgs,
  type: MainColors.secondary
} as Partial<ButtonComponent>;

export const InfoButton = Template.bind({});
InfoButton.args = {
  ...defaultArgs,
  type: MainColors.info
} as Partial<ButtonComponent>;

export const WarningButton = Template.bind({});
WarningButton.args = {
  ...defaultArgs,
  type: MainColors.warning
} as Partial<ButtonComponent>;

export const DangerButton = Template.bind({});
DangerButton.args = {
  ...defaultArgs,
  type: MainColors.danger
} as Partial<ButtonComponent>;

export const LightButton = Template.bind({});
LightButton.args = {
  ...defaultArgs,
  type: MainColors.light
} as Partial<ButtonComponent>;

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  ...defaultArgs,
  type: 'primary',
  disabled: true
} as Partial<ButtonComponent>;

export const BusyButton = Template.bind({});
BusyButton.args = {
  ...defaultArgs,
  type: 'primary',
  busy: true,
  busyText: 'Aguarde...'
} as Partial<ButtonComponent>;

export const IconButton = Template.bind({});
IconButton.args = {
  ...defaultArgs,
  type: 'primary',
  busy: false,
  busyText: 'Aguarde...',
  iconClass: 'uil uil-lg uil-arrow-to-bottom',
  outline: true,
  label: 'Download',
} as Partial<ButtonComponent>;

export const SmallButton = Template.bind({});
SmallButton.args = {
  ...defaultArgs,
  size: 'sm'
} as Partial<ButtonComponent>;
