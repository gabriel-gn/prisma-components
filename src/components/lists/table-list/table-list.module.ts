import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableListComponent} from './table-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [TableListComponent],
  exports: [TableListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSelectModule
  ]
})
export class TableListModule {
}
