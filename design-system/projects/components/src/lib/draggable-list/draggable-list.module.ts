import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DraggableListComponent} from './draggable-list.component';


@NgModule({
  declarations: [DraggableListComponent],
  exports: [DraggableListComponent],
  imports: [
    CommonModule
  ]
})
export class DraggableListModule {
}
