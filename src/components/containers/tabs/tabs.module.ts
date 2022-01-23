import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabsComponent} from '../tabs/tabs.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    TabsComponent
  ],
  exports: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ]
})
export class TabsModule {
}
