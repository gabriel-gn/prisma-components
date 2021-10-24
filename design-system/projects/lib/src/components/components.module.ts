import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {ComponentsComponent} from './components.component';
import {CommonModule} from '@angular/common';
import {ButtonModule} from './inputs/button/button.module';
import {DraggableListModule} from './lists/draggable-list/draggable-list.module';
import {MatSelectModule} from '@angular/material/select';
import {TableListModule} from './lists/table-list/table-list.module';
import {GridListModule} from './lists/grid-list/grid-list.module';
import {MultiLevelDropdownMenuModule} from './multi-level-dropdown-menu/multi-level-dropdown-menu.module';
import {ComboBoxModule} from './inputs/combo-box/combo-box.module';
import {DropdownActionsModule} from './inputs/dropdown-actions/dropdown-actions.module';
import {StepperModule} from './navigation/stepper/stepper.module';


@NgModule({
  declarations: [
    ComponentsComponent,
  ],
  exports: [
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DraggableListModule,
    MatSelectModule,
    TableListModule,
    ComboBoxModule,
    GridListModule,
    StepperModule,
    DropdownActionsModule,
    MultiLevelDropdownMenuModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrismaComponentsModule {
}
