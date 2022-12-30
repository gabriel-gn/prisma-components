import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabsComponent} from './tabs.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    TabsComponent
  ],
  exports: [
    TabsComponent,
    MatTabsModule
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ]
})
export class TabsModule {
}
