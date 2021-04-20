import {Meta, Story} from '@storybook/angular';
import {DraggableListComponent} from '../projects/components/src/lib/draggable-list/draggable-list.component';

export default {
  title: 'Prisma/Draggable List',
  component: DraggableListComponent,
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
