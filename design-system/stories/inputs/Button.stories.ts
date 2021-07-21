import {ButtonComponent} from '../../projects/components/src/lib/button/button.component';
import {Meta} from '@storybook/angular/types-6-0';
import {Story} from '@storybook/angular';

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

export const DefaultButton = Template.bind({});
// DefaultButton.parameters = { controls: { include: ['label', 'busy'] } };
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
  type: 'primary',
  busy: false,
  busyText: 'Aguarde...',
  iconClass: 'uil uil-lg uil-arrow-to-bottom',
  outline: true,
};
