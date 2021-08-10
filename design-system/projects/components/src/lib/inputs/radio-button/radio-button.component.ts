import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OrientationEnum} from '../../../models/orientation';

@Component({
  selector: 'pm-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent {

  /**
   * Orientação horizontal ou vertical do componente.
   * Aceita `horizontal` | `vertical`
   */
  @Input() orientation: OrientationEnum = OrientationEnum.Y;
  /**
   * Desabilita a interação com os valores do radio button.
   */
  @Input() disabled = false;
  /**
   * Array de strings que serão exibidos no radio button
   */
  @Input() values: string[] = [];
  /**
   * Valor selecionado
   */
  @Input() selectedValue: string;
  /**
   * Ao trocar o valor selecionado, emite este evento com o novo valor
   */
  @Output() selectedChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  public setValue(value: string): void {
    this.selectedValue = value;
    this.selectedChange.emit(this.selectedValue);
  }

}
