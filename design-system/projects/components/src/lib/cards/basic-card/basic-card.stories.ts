import {BasicCardComponent} from './basic-card.component';
import {Meta} from '@storybook/angular/types-6-0';
import {Story} from '@storybook/angular';

export default {
  title: 'Prisma/Stories/BasicCard',
  component: BasicCardComponent,
} as Meta;

export const Template: Story<BasicCardComponent> = (args) => ({
  props: args,
  template: `
    <pm-basic-card
    >
    </pm-basic-card>
  `
});

export const defaultArgs = {
};

export const DefaultBasicCard = Template.bind({});
DefaultBasicCard.args = {
  ...defaultArgs
};
