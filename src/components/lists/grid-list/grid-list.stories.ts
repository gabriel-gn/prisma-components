import {GridListComponent} from './grid-list.component';
import {Meta, Story} from '@storybook/angular';
import {MainColors} from '../../../models/colors';

export default {
  title: 'Prisma/Stories/GridList',
  component: GridListComponent,
} as Meta;

export const Template: Story<GridListComponent> = (args) => ({
  props: args,
  template: `
    <pm-grid-list
      [items]="items"
      [displayStyle]="displayStyle"
      [gridHeaderReverse]="gridHeaderReverse"
      [bodyBackgroundColor]="bodyBackgroundColor"
      [actionTemplate]="undefined"
      [overflowGallery]="overflowGallery"
    >
    </pm-grid-list>
  `
});

export const defaultArgs = {
};

export const DefaultGridList = Template.bind({});
const getColor = () => MainColors.primary;
DefaultGridList.args = {
  ...defaultArgs,
  displayStyle: 'grid',
  overflowGallery: true,
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
} as Partial<GridListComponent>;
