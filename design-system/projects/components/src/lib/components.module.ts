import {NgModule} from '@angular/core';
import {ComponentsComponent} from './components.component';
import {CommonModule} from '@angular/common';
import {ButtonModule} from './button/button.module';
import {DraggableListModule} from './draggable-list/draggable-list.module';


@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DraggableListModule
  ],
  exports: [
    ComponentsComponent
  ]
})
export class PrismaComponentsModule {
}
