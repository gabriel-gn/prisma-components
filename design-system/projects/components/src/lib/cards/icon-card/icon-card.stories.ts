import {IconCardComponent} from './icon-card.component';
import {Meta} from '@storybook/angular/types-6-0';
import {Story} from '@storybook/angular';
import {OrientationEnum} from "../../../models/orientation";

export default {
  title: 'Prisma/Stories/IconCard',
  component: IconCardComponent,
} as Meta;

export const Template: Story<IconCardComponent> = (args) => ({
  props: args,
  template: `
    <pm-icon-card
      [textPosition]="textPosition"
      [paddingClass]="paddingClass"
      [hoverable]="hoverable"
      [orientation]="orientation"
      [iconClass]="iconClass"
      [title]="title"
      [subtitle]="subtitle"
    >
    </pm-icon-card>
  `
});

export const defaultArgs = {
  textPosition: 'center',
  paddingClass: 'p-3',
  hoverable: true,
  orientation: OrientationEnum.Y,
  iconClass: 'uil uil-star',
  title: '',
  subtitle: '',
};

export const DefaultIconCard = Template.bind({});
DefaultIconCard.args = {
  ...defaultArgs,
  title: 'Amazing Title!',
  subtitle: 'Amazing subtitle!',
};
