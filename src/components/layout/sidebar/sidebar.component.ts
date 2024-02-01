import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, ContentChildren,
  Input,
  OnInit,
  QueryList, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {SidebarItem} from "./models";
import {isObservable, Observable, of} from "rxjs";
import {SidebarEntryComponent} from "./sidebar-entry/sidebar-entry.component";
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'pm-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  @Input() showBackButton: boolean = false;
  @Input() showNextButton: boolean = false;
  @Input() nextButtonAction: () => void;
  @Input() zIndex: number;
  // @ContentChildren(SidebarEntryComponent, {descendants: true}) entries: QueryList<SidebarEntryComponent>;
  @ViewChild('drawer', {static: true}) matDrawerRef: MatDrawer;

  private _label: Observable<string>;
  @Input() set label(value: string | Observable<string>) {
    if (isObservable(value) === false) {
      value = of(`${value}`);
    }
    this._label = value as Observable<string>;
    this.cdr.markForCheck();
  }
  get label(): Observable<string> {
    return this._label;
  }

  constructor(
    public readonly cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
  }

  public isWindowWidthMobile(): boolean {
    return window.innerWidth <= 991;
  }

}
