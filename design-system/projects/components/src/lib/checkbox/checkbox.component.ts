import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'pm-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  @Output() onChange = new EventEmitter();
  @Input() value = false;
  @Input() disabled = true;

  constructor() {
  }

  public setValue(value: boolean): void {
    this.value = value;
    this.onChange.emit(this.value);
  }

}
