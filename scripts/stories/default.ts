// @ts-ignore
import {XXXComponent} from './XXXName.component';
import {Meta, Story} from '@storybook/angular';

export default {
  title: 'Prisma/Stories/XXXTitle',
  component: XXXComponent,
} as Meta;

export const Template: Story<XXXComponent> = (args) => ({
  props: args,
  template: `
    <pm-XXXName
    >
    </pm-XXXName>
  `
});

export const defaultArgs = {
};

export const DefaultXXXTitle = Template.bind({});
DefaultXXXTitle.args = {
  ...defaultArgs
} as Partial<XXXComponent>;
