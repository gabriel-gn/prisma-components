import {Component, Input, OnInit} from '@angular/core';
import {SidebarItem} from "./sidebar-content/models";
import {isObservable, Observable, of} from "rxjs";

@Component({
  selector: 'pm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() showBackButton: boolean = false;
  @Input() sidebarEntries: SidebarItem[] = [];

  private _label: Observable<string>;
  @Input() set label(value: string | Observable<string>) {
    if (isObservable(value) === false) {
      value = of(`${value}`);
    }
    this._label = value as Observable<string>;
  }
  get label(): Observable<string> {
    return this._label;
  }

  constructor() { }

  ngOnInit(): void {
  }

  public isWindowWidthMobile(): boolean {
    return window.innerWidth <= 991;
  }

}
