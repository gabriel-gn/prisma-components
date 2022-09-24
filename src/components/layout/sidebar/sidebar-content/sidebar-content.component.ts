import {Component, Input, OnInit} from '@angular/core';
import {SidebarItem} from './models';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidebar-content',
    templateUrl: './sidebar-content.component.html',
    styleUrls: ['./sidebar-content.component.scss']
})
export class SidebarContentComponent implements OnInit {

    @Input() drawer: MatDrawer;
    @Input() minWidth: string = '240px';
    @Input() expandCurrentItem: boolean = true;
    @Input() sidebarEntries: SidebarItem[] = [];
    public currentExpandedSession: string = '';

    constructor(
    ) {
    }

    ngOnInit(): void {
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
