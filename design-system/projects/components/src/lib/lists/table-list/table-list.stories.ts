import {TableListComponent} from './table-list.component';
import {Meta} from '@storybook/angular/types-6-0';
import {Story} from '@storybook/angular';

export default {
  title: 'Prisma/Stories/TableList',
  component: TableListComponent,
} as Meta;

export const Template: Story<TableListComponent> = (args) => ({
  props: args,
  template: `
    <pm-table-list
    >
    </pm-table-list>
  `
});

export const defaultArgs = {
};

export const DefaultTableList = Template.bind({});
DefaultTableList.args = {
  ...defaultArgs
};
