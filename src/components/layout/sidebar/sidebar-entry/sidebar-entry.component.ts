import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Host,
  Input,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
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
export class SidebarEntryComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ContentChildren(SidebarEntryComponent)
  sidebarEntries: SidebarEntryComponent[];
  @Input() minWidth: string = '240px';

  _entry: SidebarItem;
  @Input() set entry(item: SidebarItem) {
    this._entry = item;
    this.cdr.detectChanges();
  }
  public get entry() {
    return this._entry;
  }

  private drawer: MatDrawer;
  private sidebarRef: SidebarComponent;
  public isRouteActive: boolean = false;

  constructor(
    @Host() sidebar: SidebarComponent,
    private readonly cdr: ChangeDetectorRef,
  ) {
    this.sidebarRef = sidebar;
  }

  public ngOnInit(): void {
    this.drawer = this.sidebarRef.matDrawerRef;
  }

  public ngAfterViewInit(): void {
    this.detectChildrenNodes();
  }

  public ngAfterViewChecked(): void {
    this.detectChildrenNodes();
  }

  public detectChildrenNodes(): void {
    if (this.sidebarEntries && this.sidebarEntries.length > 0) {
      this.entry.children = [];
      [...this.sidebarEntries].forEach((childEntry: SidebarEntryComponent) => {
        this.entry.children.push(childEntry.entry);
      })
      this.cdr.detectChanges();
    }
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
      && !!treeId
    ) {
      this.isRouteActive = true;
    }
  }

  isActiveSession(): boolean {
    if (this.isRouteActive) {
      return true;
    } else {
      if (this.sidebarEntries && this.sidebarEntries.length > 0) {
        return this.sidebarEntries.some(e => e.isRouteActive);
      }
      return false;
    }
  }

  public getIdForEntry(entry: SidebarItem, prefix: string = ''): string {
    const randomHash = Math.random().toString(36).slice(2, 7);
    let entryId = entry.label.replace(/[^a-zA-Z0-9,._-]/g, '');
    entryId = prefix ? `${prefix}${entryId}` : entryId; // não pode ter "." senão o id não é reconhecido direito pelo bootstrap
    return `${entryId}-${randomHash}`;
  }


}
