import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComboBoxComponent} from './combo-box.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ComboBoxComponent],
  exports: [ComboBoxComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ]
})
export class ComboBoxModule {
}
