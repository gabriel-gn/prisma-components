import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MultiLevelDropdownMenuComponent} from './multi-level-dropdown-menu.component';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {ButtonModule} from '../inputs/button/button.module';


@NgModule({
  declarations: [MultiLevelDropdownMenuComponent],
  exports: [MultiLevelDropdownMenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    ButtonModule,
  ]
})
export class MultiLevelDropdownMenuModule {
}
