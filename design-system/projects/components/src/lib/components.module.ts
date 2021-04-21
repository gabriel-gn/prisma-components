import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {ComponentsComponent} from './components.component';
import {CommonModule} from '@angular/common';
import {ButtonModule} from './button/button.module';
import {DraggableListModule} from './draggable-list/draggable-list.module';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DraggableListModule,
    MatSelectModule
  ],
  exports: [
    ComponentsComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PrismaComponentsModule {
}
