import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterModule} from "@angular/router";
import {NavigationBackClickModule} from "../../../directives/navigation-back-click/navigation-back-click.module";
import {SidebarEntryComponent} from "./sidebar-entry/sidebar-entry.component";


@NgModule({
  declarations: [
    SidebarComponent,
  ],
  exports: [
    SidebarComponent,
    SidebarEntryComponent
  ],
    imports: [
        CommonModule,
        MatSidenavModule,
        RouterModule,
        NavigationBackClickModule,
        SidebarEntryComponent
    ]
})
export class SidebarModule {
}
