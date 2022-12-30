import {DropdownActionsComponent} from './dropdown-actions.component';
import {Meta, Story} from '@storybook/angular';

export default {
  title: 'Prisma/Stories/DropdownActions',
  component: DropdownActionsComponent,
} as Meta;

export const Template: Story<DropdownActionsComponent> = (args) => ({
  props: args,
  template: `
    <pm-dropdown-actions
      [actions]="actions"
    >
    </pm-dropdown-actions>
  `
});

export const defaultArgs = {
  actions: []
};

export const DefaultDropdownActions = Template.bind({});
DefaultDropdownActions.args = {
  ...defaultArgs,
  actions: [
    {
      label: 'Log 1',
      method: () => console.log('1')
    },
    {
      label: 'Log 2',
      method: () => console.log('2')
    },
    {
      label: 'Log 3',
      method: () => console.log('3')
    }
  ]
} as Partial<DropdownActionsComponent>;
