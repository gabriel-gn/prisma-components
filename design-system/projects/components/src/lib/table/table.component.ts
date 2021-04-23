import {Component, Input} from '@angular/core';

@Component({
  selector: 'pm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor() {
  }

  @Input() columns: string[] = ['preview', 'name', 'price', 'author'];
  @Input() columnNames: string[] = ['Modelo', 'Nome', 'Preço', 'Autor'];
  @Input() thumbnailPropertyName: 'preview';
  @Input() thumbnailHeight: '50px';
  @Input() showHeader = true;
  @Input() itemList: any[] = [
    {preview: 'https://pbs.twimg.com/profile_images/661223657528651776/94PccMFW.jpg',
      name: 'Imagem1', price: 2.99, author: 'admin'},
    {preview: 'https://logz.io/wp-content/uploads/2017/03/open-source-bi-tools-1280x720.jpg',
      name: 'Imagem1', price: 2.99, author: 'admin22'},
  ];

}
