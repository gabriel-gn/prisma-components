import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LongPressDirective } from './long-press.directive';
import { ShortPressDirective } from './short-press.directive';

// ref: https://stackoverflow.com/a/43629814/13335507

@NgModule({
  declarations: [
    LongPressDirective,
    ShortPressDirective
  ],
  exports: [
    LongPressDirective,
    ShortPressDirective
  ],
  imports: [
    CommonModule
  ]
})
export class LongPressModule { }
