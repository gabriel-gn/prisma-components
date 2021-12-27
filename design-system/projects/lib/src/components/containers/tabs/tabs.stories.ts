import {TabsComponent} from './tabs.component';
import {Meta} from '@storybook/angular/types-6-0';
import {Story} from '@storybook/angular';

export default {
  title: 'Prisma/Stories/Tabs',
  component: TabsComponent,
} as Meta;

export const Template: Story<TabsComponent> = (args) => ({
  props: args,
  template: `
    <pm-tabs
    >
    </pm-tabs>
  `
});

export const defaultArgs = {
};

export const DefaultTabs = Template.bind({});
DefaultTabs.args = {
  ...defaultArgs
};
