import {ExpansionPanelComponent} from './expansion-panel.component';
import {Meta, Story} from '@storybook/angular';

export default {
  title: 'Prisma/Stories/ExpansionPanel',
  component: ExpansionPanelComponent,
} as Meta;

export const Template: Story<ExpansionPanelComponent> = (args) => ({
  props: args,
  template: `
    <pm-expansion-panel
        [title]="title"
        [subtitle]="subtitle"
    >
        Add your content here
    </pm-expansion-panel>
  `
});

export const defaultArgs = {
  title: '',
  subtitle: '',
};

export const DefaultExpansionPanel = Template.bind({});
DefaultExpansionPanel.args = {
  ...defaultArgs,
  title: 'My Title',
  subtitle: 'My Subtitle',
};
