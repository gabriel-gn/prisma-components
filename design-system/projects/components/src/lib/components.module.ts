import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {ComponentsComponent} from './components.component';
import {CommonModule} from '@angular/common';
import {ButtonModule} from './button/button.module';
import {DraggableListModule} from './draggable-list/draggable-list.module';
import {MatSelectModule} from '@angular/material/select';
import {TableModule} from './table/table.module';
import {ComboBoxModule} from './combo-box/combo-box.module';
import {GridListModule} from './grid-list/grid-list.module';
import {CardModule} from './card/card.module';


@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DraggableListModule,
    MatSelectModule,
    TableModule,
    ComboBoxModule,
    GridListModule,
    CardModule
  ],
  exports: [
    ComponentsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrismaComponentsModule {
}
