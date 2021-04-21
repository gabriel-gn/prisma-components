import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {DraggableListComponent} from '../projects/components/src/lib/draggable-list/draggable-list.component';
import {DraggableListModule} from '../projects/components/src/lib/draggable-list/draggable-list.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export default {
  title: 'Prisma/Draggable List',
  component: DraggableListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        DraggableListModule,
        BrowserAnimationsModule
      ],
    }),
  ],
  argTypes: {
    showIndex: {control: 'boolean'},
  }
} as Meta;

const Template: Story<DraggableListComponent> = (args: DraggableListComponent) => ({
  component: DraggableListComponent,
  props: args,
  template: `
    <pm-draggable-list
        [showIndex]="showIndex"
    >
      conteudo
    </pm-draggable-list>`
});

export const ExampleList = Template.bind({});
ExampleList.args = {
  showIndex: true,
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
  ]
};

export const NoIndexList = Template.bind({});
ExampleList.args = {
  showIndex: false,
  itemList: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
};
