import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconCardComponent} from './icon-card.component';
import {BasicCardModule} from '../basic-card/basic-card.module';


@NgModule({
  declarations: [IconCardComponent],
  exports: [IconCardComponent],
  imports: [
    CommonModule,
    BasicCardModule
  ]
})
export class IconCardModule {
}
