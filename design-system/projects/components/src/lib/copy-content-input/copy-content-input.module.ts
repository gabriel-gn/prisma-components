import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CopyContentInputComponent} from './copy-content-input.component';
import {ClipboardModule} from '@angular/cdk/clipboard';


@NgModule({
  declarations: [CopyContentInputComponent],
  exports: [CopyContentInputComponent],
  imports: [
    CommonModule,
    ClipboardModule
  ]
})
export class CopyContentInputModule {
}
