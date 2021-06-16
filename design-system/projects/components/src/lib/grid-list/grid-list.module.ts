import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridListComponent} from './grid-list.component';


@NgModule({
  declarations: [GridListComponent],
  exports: [GridListComponent],
  imports: [
    CommonModule
  ]
})
export class GridListModule {
}
