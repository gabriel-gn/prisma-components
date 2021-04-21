import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DraggableListComponent} from './draggable-list.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [DraggableListComponent],
  exports: [DraggableListComponent],
  imports: [
    CommonModule,
    DragDropModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,
    MatTooltipModule,
  ]
})
export class DraggableListModule {
}
