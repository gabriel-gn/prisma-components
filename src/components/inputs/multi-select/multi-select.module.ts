import {NgModule} from '@angular/core';
import {MultiSelectComponent} from './multi-select.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {CommonModule} from '@angular/common';
import {NgIfLoadedModule} from "../../../directives/ng-if-loaded/ng-if-loaded.module";

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
    NgIfLoadedModule.forRoot(),
  ]
})
export class MultiSelectModule {
}
