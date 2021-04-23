import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {TableComponent} from '../projects/components/src/lib/table/table.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from '../projects/components/src/lib/table/table.module';
import {Input} from "@angular/core";

export default {
  title: 'Prisma/Tables',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      imports: [
        TableModule,
        BrowserAnimationsModule
      ],
    }),
  ],
  argTypes: {
    columns: {control: 'array'},
    columnNames: {control: 'array'},
    itemList: {control: 'array'},
    showHeader: {control: 'boolean'},
    thumbnailPropertyName: {control: 'text'},
    thumbnailHeight: {control: 'text'},
    // we need to override here since in Angular it could be null as well and therefore it would become an ambigious data type for storybook
  }
} as Meta;

const Template: Story<TableComponent> = (args: TableComponent) => ({
  component: TableComponent,
  props: args,
  template: `
    <pm-table
      [columns]="columns"
      [columnNames]="columnNames"
      [showHeader]="showHeader"
      [itemList]="itemList"
      [thumbnailPropertyName]="thumbnailPropertyName"
      [thumbnailHeight]="thumbnailHeight"
    ></pm-table>`
});

export const ExampleTable = Template.bind({});
ExampleTable.args = {
  columns: ['preview', 'name', 'price', 'author'],
  columnNames: ['Modelo', 'Nome', 'Preço', 'Autor'],
  thumbnailPropertyName: 'preview',
  thumbnailHeight: '50px',
  showHeader: true,
  itemList: [
    {preview: 'https://pbs.twimg.com/profile_images/661223657528651776/94PccMFW.jpg',
      name: 'Imagem1', price: 2.99, author: 'admin'},
    {preview: 'https://logz.io/wp-content/uploads/2017/03/open-source-bi-tools-1280x720.jpg',
      name: 'Imagem1', price: 2.99, author: 'admin22'},
  ],
};

export const NoHeader = Template.bind({});
NoHeader.args = {
  showHeader: false
};

export const ThumbnailTable = Template.bind({});
ThumbnailTable.args = {
  columns: ['preview', 'name', 'price', 'author'],
  columnNames: ['Modelo', 'Nome', 'Preço', 'Autor'],
  thumbnailPropertyName: 'preview',
  thumbnailHeight: '50px',
  showHeader: true,
  itemList: [
    {preview: 'https://pbs.twimg.com/profile_images/661223657528651776/94PccMFW.jpg',
      name: 'Imagem1', price: 2.99, author: 'admin'},
    {preview: 'https://logz.io/wp-content/uploads/2017/03/open-source-bi-tools-1280x720.jpg',
      name: 'Imagem1', price: 2.99, author: 'admin22'},
  ],
};
