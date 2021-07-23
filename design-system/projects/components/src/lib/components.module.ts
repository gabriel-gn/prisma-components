import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {ComponentsComponent} from './components.component';
import {CommonModule} from '@angular/common';
import {ButtonModule} from './inputs/button/button.module';
import {DraggableListModule} from './draggable-list/draggable-list.module';
import {MatSelectModule} from '@angular/material/select';
import {TableModule} from './table/table.module';
import {GridListModule} from './grid-list/grid-list.module';
import {CardModule} from './card/card.module';
import {StepperModule} from './stepper/stepper.module';
import {MultiLevelDropdownMenuModule} from './multi-level-dropdown-menu/multi-level-dropdown-menu.module';
import {ComboBoxModule} from './inputs/combo-box/combo-box.module';


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
    CardModule,
    StepperModule,
    MultiLevelDropdownMenuModule
  ],
  exports: [
    ComponentsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrismaComponentsModule {
}
