import {NgModule} from '@angular/core';
import {ComponentsComponent} from './components.component';
import {ButtonComponent} from './button/button.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    ComponentsComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentsComponent,
    ButtonComponent
  ]
})
export class PrismaComponentsModule {
}
