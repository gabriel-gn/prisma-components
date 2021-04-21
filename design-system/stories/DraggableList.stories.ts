import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {DraggableListComponent} from '../projects/components/src/lib/draggable-list/draggable-list.component';
import {DraggableListModule} from '../projects/components/src/lib/draggable-list/draggable-list.module';

export default {
  title: 'Prisma/Draggable List',
  component: DraggableListComponent,
  decorators: [
    moduleMetadata({
      imports: [DraggableListModule],
    }),
  ],
  argTypes: {
  }
} as Meta;

const Template: Story<DraggableListComponent> = (args: DraggableListComponent) => ({
  component: DraggableListComponent,
  props: args,
  template: `
    <pm-draggable-list>
      conteudo
    </pm-draggable-list>`
});

export const ExampleList = Template.bind({});
ExampleList.args = {
};
