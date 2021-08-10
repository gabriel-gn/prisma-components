import {IconCardComponent} from './icon-card.component';
import {Meta} from '@storybook/angular/types-6-0';
import {Story} from '@storybook/angular';
import {OrientationEnum} from '../../../models/orientation';

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
      [iconCardArray]="iconCardArray"
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
  iconCardArray: [],
};

export const DefaultIconCard = Template.bind({});
DefaultIconCard.args = {
  ...defaultArgs,
  title: 'Amazing Title!',
  subtitle: 'Amazing subtitle!',
};

export const ArrayIconCard = Template.bind({});
ArrayIconCard.args = {
  ...defaultArgs,
  iconCardArray: [
    {
      title: 'Amazing Title 1!',
      subtitle: 'Amazing subtitle 1!',
      iconClass: 'uil uil-star'
    },
    {
      title: 'Amazing Title 2!',
      subtitle: 'Amazing subtitle 2!',
      iconClass: 'uil uil-table'
    },
    {
      title: 'Amazing Title 3!',
      subtitle: 'Amazing subtitle 3!',
      iconClass: 'uil uil-icons'
    },
    {
      title: 'Amazing Title 4!',
      subtitle: 'Amazing subtitle 4!',
      iconClass: 'uil uil-analytics'
    }
  ],
};
