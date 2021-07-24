import {GridListComponent} from './grid-list.component';
import {Meta} from '@storybook/angular/types-6-0';
import {Story} from '@storybook/angular';

export default {
  title: 'Prisma/Stories/GridList',
  component: GridListComponent,
} as Meta;

export const Template: Story<GridListComponent> = (args) => ({
  props: args,
  template: `
    <pm-grid-list
    >
    </pm-grid-list>
  `
});

export const defaultArgs = {
};

export const DefaultGridList = Template.bind({});
DefaultGridList.args = {
  ...defaultArgs
};
