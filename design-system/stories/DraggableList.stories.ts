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
        [showIndex]="true"
    >
      conteudo
    </pm-draggable-list>`
});

export const ExampleList = Template.bind({});
ExampleList.args = {
};

// export const ExampleList2 = Template.bind({});
// ExampleList2.args = {
//   showIndex: false
// };
