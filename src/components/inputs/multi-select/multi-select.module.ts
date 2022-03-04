import {NgModule} from '@angular/core';
import {MultiSelectComponent} from './multi-select.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    MultiSelectComponent
  ],
  exports: [
    MultiSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
  ]
})
export class MultiSelectModule {
}
