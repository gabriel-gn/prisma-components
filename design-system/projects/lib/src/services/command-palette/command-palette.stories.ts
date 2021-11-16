import {Meta} from '@storybook/angular/types-6-0';
import {Story} from '@storybook/angular';
import {TriggerButtonComponent} from './trigger-button/trigger-button.component';

export default {
  title: 'Prisma/Inputs/Buttons/Stories',
  component: TriggerButtonComponent,
} as Meta;

export const Template: Story<TriggerButtonComponent> = (args) => ({
  props: args,
  template: `
    <pm-palette-trigger-button
        [label]="label"
        [iconClass]="iconClass"
    >
    </pm-palette-trigger-button>
  `
});

export const DefaultModal = Template.bind({});
DefaultModal.args = {
  label: undefined,
  iconClass: undefined
  // iconClass: 'uil uil-xl uil-apps'
};
