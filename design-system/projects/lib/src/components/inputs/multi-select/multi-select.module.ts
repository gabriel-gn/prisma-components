import {NgModule} from '@angular/core';
import {MultiSelectComponent} from './multi-select.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    MultiSelectComponent
  ],
  exports: [
    MultiSelectComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
  ]
})
export class MultiSelectModule {
}
