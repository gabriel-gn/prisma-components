import {Component, ViewChild} from '@angular/core';
import {TableComponent} from '../../../design-system/projects/components/src/lib/table/table.component';

@Component({
  selector: 'ma-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  @ViewChild('prismaTable', {static: true}) prismaTable: TableComponent;
  busy = false;
  columns = ['name', 'price'];
  columnNames = ['Nome', 'Preço'];

  public setBusy(): void {
    this.busy = true;
    setTimeout(() => {
      this.busy = false;
    }, 1500);
  }

  public setTableData(): void {
    const list = [
      {preview: '1', name: '1', price: 2.99, author: 'admin'},
      {preview: '2', name: '2', price: 2.99, author: 'admin'},
      {preview: '3', name: '3', price: 2.99, author: 'admin'},
    ];
    this.prismaTable.setItemList(list);
  }
}
