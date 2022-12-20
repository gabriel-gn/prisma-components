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
        [orientation]="orientation"
        [sticky]="sticky"
    >
      <mat-tab-group>
        <mat-tab label="First"> Content 1 </mat-tab>
        <mat-tab label="Second"> Content 2 </mat-tab>
        <mat-tab label="Third"> Content 3 </mat-tab>
      </mat-tab-group>
    </pm-tabs>
  `
});

export const defaultArgs = {
  orientation: 'horizontal',
  sticky: true
};

export const DefaultTabs = Template.bind({});
DefaultTabs.args = {
  ...defaultArgs
} as Partial<TabsComponent>;
