import {Component, Input, TemplateRef} from '@angular/core';
import {MatSelect} from '@angular/material/select';
import {MainColors} from '../../../models/colors';
import {ButtonComponent} from '../button/button.component';

@Component({
  selector: 'pm-dropdown-actions',
  templateUrl: './dropdown-actions.component.html',
  styleUrls: ['./dropdown-actions.component.scss']
})
export class DropdownActionsComponent extends ButtonComponent {

  @Input('actions') actions: {label: string, method: any}[] = [];
  @Input() closeOnClick = true;
  @Input() buttonTemplate: TemplateRef<any>;

  // buttons input
  @Input('type') override type: MainColors | string = MainColors.light;
  @Input('iconClass') override iconClass = 'uil uil-md uil-ellipsis-h';

  constructor() {
    super();
  }

  public callMethod(action: any, actionsSelect: MatSelect): void {
    action.method();
    if (this.closeOnClick) {
      actionsSelect.close();
    }
  }
}
