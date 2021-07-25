import {TableListComponent} from './table-list.component';
import {Meta} from '@storybook/angular/types-6-0';
import {Story} from '@storybook/angular';

export default {
  title: 'Prisma/Stories/TableList',
  component: TableListComponent,
} as Meta;

export const Template: Story<TableListComponent> = (args) => ({
  props: args,
  template: `<pm-table-list
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
    [expandedDetailTemplate]="expandedDetailTemplate"
    [disableExpandedOnDisabledRow]="disableExpandedOnDisabledRow"
  ></pm-table-list>`
});

export const defaultArgs = {
  columns: [],
  columnNames: [],
  imageColumns: [],
  imageHeight: '50px',
  showHeader: true,
  numberFormat: '1.2-2',
  numberPrefix: '',
  actionsTemplate: undefined,
  itemList: undefined,
  borderRadius: undefined,
  backgroundColor: undefined,
  expandedDetailTemplate: undefined,
  disableExpandedOnDisabledRow: true,
  expandedRow: undefined
};

export const DefaultTableList = Template.bind({});
DefaultTableList.args = {
  ...defaultArgs,
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
  ...defaultArgs,
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
  ...defaultArgs,
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
  ...defaultArgs,
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


export const ActionsTableTemplate: Story<TableListComponent> = (args) => ({
  props: args,
  template: `
    <pm-table-list
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
      [expandedDetailTemplate]="expandedDetailTemplate"
      [disableExpandedOnDisabledRow]="disableExpandedOnDisabledRow"
      [actionsTemplate]="actionsTemplate"
    ></pm-table-list>

    <ng-template #actionsTemplate let-item let-column="column">
      <div [ngClass]="{'disabled': item?.disabled === true}">
        <button class="btn btn-primary" [disabled]="item?.disabled">Actions (id: {{item.id}})</button>
      </div>
    </ng-template>
  `
});
export const ActionsTable = ActionsTableTemplate.bind({});
ActionsTable.args = {
  ...defaultArgs,
  columns: ['id', 'name', 'price', 'author'],
  columnNames: ['ID', 'Nome', 'Preço', 'Autor'],
  showHeader: true,
  itemList: [
    {id: '1', name: 'Imagem1', price: 2.99, author: 'admin'},
    {id: '2', name: 'Imagem1', price: 2.99, author: 'admin22'},
    {id: '3', name: 'Imagem3', price: 5.99, author: 'admin123', disabled: true},
    {id: '4', name: 'Imagem4', price: 5.99, author: 'admin123'},
  ],
  borderRadius: undefined,
};

export const ExpandedDetailsTableTemplate: Story<TableListComponent> = (args) => ({
  props: args,
  template: `
    <pm-table-list
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
      [expandedDetailTemplate]="dummyExpandedItem"
      [disableExpandedOnDisabledRow]="disableExpandedOnDisabledRow"
    ></pm-table-list>

    <ng-template #dummyExpandedItem let-item>
      <div class="d-block">
        <p>{{item.name}} - {{item.price}}</p>
        <p>Here is an example item</p>
        <p>Here is an example item</p>
      </div>
    </ng-template>
  `
});
export const ExpandedDetailsTable = ExpandedDetailsTableTemplate.bind({});
ExpandedDetailsTable.args = {
  ...defaultArgs,
  columns: ['id', 'name', 'price', 'author'],
  columnNames: ['ID', 'Nome', 'Preço', 'Autor'],
  imageHeight: '50px',
  showHeader: true,
  itemList: [
    {id: '1', name: 'Imagem1', price: 2.99, author: 'admin'},
    {id: '2', name: 'Imagem1', price: 2.99, author: 'admin22'},
    {id: '3', name: 'Imagem3', price: 5.99, author: 'admin123', disabled: true},
    {id: '4', name: 'Imagem4', price: 5.99, author: 'admin123'},
  ],
  borderRadius: undefined,
};
