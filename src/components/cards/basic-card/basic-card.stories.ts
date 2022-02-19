import {BasicCardComponent} from './basic-card.component';
import {Meta} from '@storybook/angular/types-6-0';
import {Story} from '@storybook/angular';
import {Sizes} from '../../../models/sizes';

export default {
  title: 'Prisma/Stories/BasicCard',
  component: BasicCardComponent,
} as Meta;

export const Template: Story<BasicCardComponent> = (args) => ({
  props: args,
  template: `
    <pm-basic-card
      [hoverable]="hoverable"
      [borderRadius]="borderRadius"
      [paddingClass]="paddingClass"
    >
    </pm-basic-card>
  `
});

export const defaultArgs = {
  hoverable: false,
  borderRadius: Sizes.md,
  paddingClass: 'p-3'
};

export const DefaultBasicCard = Template.bind({});
DefaultBasicCard.args = {
  ...defaultArgs
};
