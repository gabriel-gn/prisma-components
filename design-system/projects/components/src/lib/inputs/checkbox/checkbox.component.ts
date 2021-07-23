import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'pm-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  /**
   * Habilita ou desabilita a marcação da checkbox
   */
  @Input() checked: boolean = false;
  /**
   * Não permite alterar a marcação da checkbox
   */
  @Input() disabled: boolean = false;
  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>(this.checked);
  @Output() onCheckedChange: EventEmitter<boolean> = new EventEmitter<boolean>(this.checked);
  @Output() disabledChange: EventEmitter<boolean> = new EventEmitter<boolean>(this.disabled);

  constructor() {
  }

  public setValue(value: boolean): void {
    this.checked = value;
    this.checkedChange.emit(this.checked);
    this.onCheckedChange.emit(this.checked);
  }

}
