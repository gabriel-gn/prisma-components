import {Component, Input, OnInit} from '@angular/core';
import {SidebarItem} from "./sidebar-content/models";

@Component({
  selector: 'pm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() showBackButton: boolean = false;
  @Input() sidebarEntries: SidebarItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public isWindowWidthMobile(): boolean {
    return window.innerWidth <= 991;
  }

}
