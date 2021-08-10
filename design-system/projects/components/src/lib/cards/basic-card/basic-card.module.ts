import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicCardComponent} from './basic-card.component';


@NgModule({
  declarations: [BasicCardComponent],
  exports: [BasicCardComponent],
  imports: [
    CommonModule
  ]
})
export class BasicCardModule {
}
