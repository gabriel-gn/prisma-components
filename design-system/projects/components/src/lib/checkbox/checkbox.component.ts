import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'pm-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  @Input() checked = false;
  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() disabled = false;
  @Output() disabledChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  public setValue(value: boolean): void {
    this.checked = value;
    this.checkedChange.emit(this.checked);
  }

}
