import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GridListModule} from '../projects/components/src/lib/grid-list/grid-list.module';
import {GridListComponent} from '../projects/components/src/lib/grid-list/grid-list.component';

export default {
  title: 'Prisma/Grid List',
  component: GridListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        GridListModule,
        BrowserAnimationsModule
      ],
    }),
  ],
  argTypes: {
    // showIndex: {control: 'boolean'},
  }
} as Meta;

const Template: Story<GridListComponent> = (args: GridListComponent) => ({
  component: GridListComponent,
  props: args,
  template: `
    <pm-grid-list
    [items]="items"
    >
      conteudo
    </pm-grid-list>`
});

export const DefaultGridList = Template.bind({});
DefaultGridList.args = {
  items: Array(20).fill({
    iconClass: 'uil uil-xl uil-arrow-to-bottom',
    thumbnailPicture: 'https://picsum.photos/500/500',
    bodyPicture: 'https://picsum.photos/1200/800',
    iconCallback: () => console.log('aaaa'),
    titleCallback: () => console.log('bbb'),
    subtitleCallback: () => console.log('ccc'),
    bodyCallback: () => console.log('ddd'),
  })
};
