import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MultiLevelDropdownMenuComponent} from '../projects/components/src/lib/multi-level-dropdown-menu/multi-level-dropdown-menu.component';
import {MultiLevelDropdownMenuModule} from '../projects/components/src/lib/multi-level-dropdown-menu/multi-level-dropdown-menu.module';

export default {
  title: 'Prisma/Multi Level Dropdown Menu',
  component: MultiLevelDropdownMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MultiLevelDropdownMenuModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
  argTypes: {
    // showIndex: {control: 'boolean'},
  }
} as Meta;

const Template: Story<MultiLevelDropdownMenuComponent> = (args: MultiLevelDropdownMenuComponent) => ({
  component: MultiLevelDropdownMenuComponent,
  props: args,
  template: `
    <pm-multi-level-dropdown-menu>
    </pm-multi-level-dropdown-menu>`
});

export const DefaultMultiLevelDropdownMenu = Template.bind({});
DefaultMultiLevelDropdownMenu.args = {
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
};
