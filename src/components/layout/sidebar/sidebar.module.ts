import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {SidebarContentComponent} from "./sidebar-content/sidebar-content.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    SidebarComponent,
    SidebarContentComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule
  ]
})
export class SidebarModule {
}
