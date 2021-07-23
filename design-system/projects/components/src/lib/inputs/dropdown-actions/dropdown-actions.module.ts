import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {ButtonModule} from '../button/button.module';
import {DropdownActionsComponent} from './dropdown-actions.component';


@NgModule({
  declarations: [DropdownActionsComponent],
  exports: [DropdownActionsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    ButtonModule,
  ]
})
export class DropdownActionsModule {
}
