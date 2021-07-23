import {Component, Input, TemplateRef} from '@angular/core';
import {MatSelect} from '@angular/material/select';
import {MainColors} from '../../../models/colors';

@Component({
  selector: 'pm-dropdown-actions',
  templateUrl: './dropdown-actions.component.html',
  styleUrls: ['./dropdown-actions.component.scss']
})
export class DropdownActionsComponent {

  @Input('actions') actions: {label: string, method: any}[] = [];
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

  public callMethod(action: any, actionsSelect: MatSelect): void {
    action.method();
    if (this.closeOnClick) {
      actionsSelect.close();
    }
  }
}
