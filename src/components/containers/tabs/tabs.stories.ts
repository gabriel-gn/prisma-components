import {TabsComponent} from './tabs.component';
import {Meta, StoryFn} from '@storybook/angular';

export default {
  title: 'Prisma/Stories/Tabs',
  component: TabsComponent,
} as Meta;

export const Template: StoryFn<TabsComponent> = (args) => ({
  props: args,
  template: `
    <pm-tabs
        [orientation]="orientation"
        [sticky]="sticky"
    >
      <mat-tab-group
        mat-stretch-tabs
        preserveContent
        [disableRipple]="true"
      >
        <mat-tab>
          <ng-template mat-tab-label>
            <i class="uil uil-lg uil-apps"></i>
            <span>Apps</span>
          </ng-template>
          <div>Content 1</div>
        </mat-tab>
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
