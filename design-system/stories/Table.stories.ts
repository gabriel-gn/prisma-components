import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {TableComponent} from '../projects/components/src/lib/table/table.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from '../projects/components/src/lib/table/table.module';

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
    imageColumns: {control: 'array'},
    imageHeight: {control: 'text'},
    showHeader: {control: 'boolean'},
    numberFormat: {control: 'text'},
    numberPrefix: {control: 'text'},
    actionsTemplate: {control: 'none'},
    itemList: {control: 'array'},
    borderRadius: {control: 'select'},
    backgroundColor: {control: 'color'},
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
      [imageColumns]="imageColumns"
      [imageHeight]="imageHeight"
      [showHeader]="showHeader"
      [numberFormat]="numberFormat"
      [numberPrefix]="numberPrefix"
      [itemList]="itemList"
      [borderRadius]="borderRadius"
      [backgroundColor]="backgroundColor"
    ></pm-table>`
});

export const ExampleTable = Template.bind({});
ExampleTable.args = {
  columns: ['preview', 'name', 'price', 'author'],
  columnNames: ['Modelo', 'Nome', 'Preço', 'Autor'],
  imageColumns: ['preview'],
  imageHeight: '50px',
  showHeader: true,
  numberFormat: '4.2-2',
  numberPrefix: 'R$',
  itemList: [
    {preview: 'https://pbs.twimg.com/profile_images/661223657528651776/94PccMFW.jpg',
      name: ['Imagem1', 'Edição limitada'], price: 2.99, author: 'admin'},
    {preview: 'https://logz.io/wp-content/uploads/2017/03/open-source-bi-tools-1280x720.jpg',
      name: 'Imagem1', price: 2.99, author: 'admin22'},
  ],
};

export const NoHeader = Template.bind({});
NoHeader.args = {
  columns: ['description', 'name', 'price', 'author'],
  columnNames: ['Descrição', 'Nome', 'Preço', 'Autor'],
  showHeader: false,
  imageColumns: [],
  itemList: [
    {
      description: 'Descrição 1',
      name: 'Imagem1', price: 2.99, author: 'admin'
    },
    {
      description: 'Descrição 2',
      name: ['Imagem1', 'Imagem2'], price: 2.99, author: 'admin22', disabled: true
    },
  ]
};

export const ThumbnailTable = Template.bind({});
ThumbnailTable.args = {
  columns: ['preview', 'name', 'price', 'author'],
  columnNames: ['Modelo', 'Nome', 'Preço', 'Autor'],
  imageColumns: ['preview'],
  imageHeight: '50px',
  showHeader: true,
  itemList: [
    {preview: 'https://pbs.twimg.com/profile_images/661223657528651776/94PccMFW.jpg',
      name: 'Imagem1', price: 2.99, author: 'admin'},
    {preview: 'https://logz.io/wp-content/uploads/2017/03/open-source-bi-tools-1280x720.jpg',
      name: 'Imagem1', price: 2.99, author: 'admin22'},
  ],
};

export const ColorTable = Template.bind({});
ColorTable.args = {
  columns: ['preview', 'name', 'price', 'author'],
  columnNames: ['Modelo', 'Nome', 'Preço', 'Autor'],
  imageColumns: ['preview'],
  imageHeight: '50px',
  showHeader: true,
  itemList: [
    {preview: 'https://pbs.twimg.com/profile_images/661223657528651776/94PccMFW.jpg',
      name: 'Imagem1', price: 2.99, author: 'admin'},
    {preview: 'https://logz.io/wp-content/uploads/2017/03/open-source-bi-tools-1280x720.jpg',
      name: 'Imagem1', price: 2.99, author: 'admin22'},
  ],
  borderRadius: undefined,
  backgroundColor: '#a1a1a1',
};
