import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Host, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatDrawer} from "@angular/material/sidenav";
import {SidebarItem} from "../models";
import {SidebarComponent} from "../sidebar.component";

@Component({
  selector: 'pm-sidebar-entry',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './sidebar-entry.component.html',
  styleUrls: ['./sidebar-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarEntryComponent implements OnInit {
  private drawer: MatDrawer;
  @Input() minWidth: string = '240px';
  @Input() expandCurrentItem: boolean = true;
  _entry: SidebarItem;
  @Input() set entry(item: SidebarItem) {
    this._entry = item;
    this.cdr.detectChanges();
  }
  public get entry() {
    return this._entry;
  }
  public currentExpandedSession: string = '';
  private sidebarRef: SidebarComponent;

  constructor(
    @Host() sidebar: SidebarComponent,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.sidebarRef = sidebar;
  }

  public ngOnInit(): void {
    this.drawer = this.sidebarRef.matDrawerRef;
  }

  public executeAction(event: any, entry: SidebarItem, closeDrawer: boolean = true): void {
    if (entry?.action) {
      event.stopPropagation();
      entry.action();
    }

    if (closeDrawer && this.drawer) {
      this.drawer.close();
    }
  }

  public keepSessionExpanded(event: any, treeId: string): void {
    if (
      event === true
      && this.expandCurrentItem
      && !!treeId
    ) {
      this.currentExpandedSession = `${treeId}`;
    }
  }

  public getIdForEntry(entry: SidebarItem, prefix: string = ''): string {
    let entryId = entry.label.replace(/[^a-zA-Z0-9,._-]/g, '');
    entryId = prefix ? `${prefix}${entryId}` : entryId; // não pode ter "." senão o id não é reconhecido direito pelo bootstrap
    return entryId;
  }


}
