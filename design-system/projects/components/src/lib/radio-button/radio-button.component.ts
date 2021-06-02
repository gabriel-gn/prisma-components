import {Component, EventEmitter, Input, Output} from '@angular/core';

export const enum OrientationEnum {
  X = 'horizontal',
  Y = 'vertical',
}

@Component({
  selector: 'pm-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent {

  @Input() orientation: OrientationEnum = OrientationEnum.Y;
  @Input() disabled = false;
  @Input() values: string[] = [];
  @Input() selectedValue: string;
  @Output() selectedChange: EventEmitter<string> = new EventEmitter<string>();

  public favoriteSeason: string;

  constructor() {
  }

  public setValue(value: string): void {
    this.selectedValue = value;
    this.selectedChange.emit(this.selectedValue);
  }

}
