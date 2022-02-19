import {DraggableListComponent} from './draggable-list.component';
import {Meta} from '@storybook/angular/types-6-0';
import {Story} from '@storybook/angular';

export default {
  title: 'Prisma/Stories/DraggableList',
  component: DraggableListComponent,
} as Meta;

export const Template: Story<DraggableListComponent> = (args) => ({
  props: args,
  template: `
    <pm-draggable-list
      [showIndex]="showIndex"
      [itemActionLabel]="itemActionLabel"
      [itemMainLabel]="itemMainLabel"
      [itemSubLabel]="itemSubLabel"
      [actions]="actions"
      [itemList]="itemList"
      [roundedBorders]="roundedBorders"
      [enableDragging]="enableDragging"
      [enableSelection]="enableSelection"
    >
    </pm-draggable-list>
  `
});

export const defaultArgs = {
  showIndex: true,
  itemActionLabel: undefined,
  itemMainLabel: undefined,
  itemSubLabel: undefined,
  actions: undefined,
  itemList: undefined,
  roundedBorders: true,
  enableDragging: true,
  enableSelection: true,
};

export const DefaultDraggableList = Template.bind({});
DefaultDraggableList.args = {
  ...defaultArgs,
  showIndex: true,
  itemActionLabel: 'Ações {name}',
  itemMainLabel: '{name} - {value} (nome - valor)',
  itemSubLabel: '{value} (valor)',
  actions: [
    {
      name: 'Log Nome {name}',
      method: (item: any) => console.log(item.name)
    },
    {
      name: 'Log Valor',
      method: (item: any) => console.log(item.value)
    }
  ],
  itemList: [
    {name: '0', value: 10},
    {name: '1', value: 111},
    {name: '2', value: 222},
    {name: '3', value: 333},
    {name: '4', value: 444},
    {name: '5', value: 555},
    {name: '6', value: 666},
    {name: '7', value: 777},
    {name: '8', value: 888},
    {name: '9', value: 999},
  ],
  roundedBorders: true,
  enableDragging: true,
  enableSelection: true,
} as Partial<DraggableListComponent>;

export const NoIndexStringList = Template.bind({});
NoIndexStringList.args = {
  ...defaultArgs,
  showIndex: false,
  itemActionLabel: 'Ações {this}',
  itemMainLabel: '{this} (string)',
  itemSubLabel: 'sublabel {this}',
  actions: [
    {
      name: 'Log ({this})',
      method: (item: any) => console.log(item)
    }
  ],
  itemList: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  roundedBorders: true,
  enableDragging: true,
  enableSelection: true,
} as Partial<DraggableListComponent>;

export const DisabledDragging = Template.bind({});
DisabledDragging.args = {
  ...defaultArgs,
  showIndex: true,
  itemActionLabel: 'Ações {this}',
  itemMainLabel: '{this} (string)',
  itemSubLabel: 'sublabel {this}',
  actions: [
    {
      name: 'Log ({this})',
      method: (item: any) => console.log(item)
    }
  ],
  itemList: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  roundedBorders: false,
  enableDragging: false,
  enableSelection: true,
} as Partial<DraggableListComponent>;
