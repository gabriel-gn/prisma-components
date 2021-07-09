import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {MatSelect} from '@angular/material/select';
import {MainColors} from '../../models/colors';

@Component({
  selector: 'pm-multi-level-dropdown-menu',
  templateUrl: './multi-level-dropdown-menu.component.html',
  styleUrls: ['./multi-level-dropdown-menu.component.scss']
})
export class MultiLevelDropdownMenuComponent implements OnInit {

  @Input('actions') actions = [];
  @Input() closeOnClick = true;
  @Input() buttonTemplate: TemplateRef<any>;

  // buttons input
  @Input('type') type: MainColors | string = MainColors.light;
  @Input('busy') busy = false;
  @Input('busyText') busyText = '';
  @Input('iconClass') iconClass = 'uil uil-md uil-ellipsis-h';
  @Input('outline') outline = false;
  @Input('disabled') disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  public callMethod(action: any, actionsSelect: MatSelect): void {
    action.method();
    if (this.closeOnClick) {
      actionsSelect.close();
    }
  }


}
