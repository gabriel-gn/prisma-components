import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GridListModule} from '../projects/components/src/lib/grid-list/grid-list.module';
import {GridListComponent} from '../projects/components/src/lib/grid-list/grid-list.component';
import {MainColors} from '../projects/components/src/models/colors';

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
        [displayStyle]="displayStyle"
        [gridHeaderReverse]="gridHeaderReverse"
        [bodyBackgroundColor]="bodyBackgroundColor"
        [actionTemplate]="undefined"
    >
      conteudo
    </pm-grid-list>`
});

export const DefaultGridList = Template.bind({});
const getColor = () => MainColors.primary;
DefaultGridList.args = {
  displayStyle: 'grid',
  gridHeaderReverse: false,
  bodyBackgroundColor: undefined,
  items: Array(20).fill({
    title: 'Item title',
    subtitle: 'item subtitle',
    iconClass: 'uil uil-xl uil-arrow-to-bottom',
    iconColor: getColor(),
    iconOutline: true,
    thumbnailPicture: 'https://picsum.photos/500/500',
    bodyPicture: 'https://picsum.photos/1200/800',
    iconCallback: (item) => console.log(item.bodyPicture + 'aaa'),
    titleCallback: (item) => console.log(item.bodyPicture + 'bbb'),
    subtitleCallback: (item) => console.log(item.bodyPicture + 'ccc'),
    bodyCallback: (item) => console.log(item.bodyPicture + 'ddd'),
  })
};
