import {ExpansionPanelComponent} from './expansion-panel.component';
import {Meta} from '@storybook/angular/types-6-0';
import {Story} from '@storybook/angular';

export default {
  title: 'Prisma/Stories/ExpansionPanel',
  component: ExpansionPanelComponent,
} as Meta;

export const Template: Story<ExpansionPanelComponent> = (args) => ({
  props: args,
  template: `
    <pm-expansion-panel
    >
        Conteúdo aqui
    </pm-expansion-panel>
  `
});

export const defaultArgs = {
};

export const DefaultExpansionPanel = Template.bind({});
DefaultExpansionPanel.args = {
  ...defaultArgs
};
