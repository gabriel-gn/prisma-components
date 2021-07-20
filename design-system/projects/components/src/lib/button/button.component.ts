import {Component, Input} from '@angular/core';
import {MainColors} from '../../models/colors';

@Component({
  selector: 'pm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input('label') label: string | null = '';  // Usada só pra aparecer no storybook
  /**
   * Utilizar as propriedades do tipo "MainColors"
   */
  @Input('type') type: MainColors | string = `${MainColors.default}`;
  @Input('busy') busy: boolean = false;
  @Input('busyText') busyText: string;
  @Input('iconClass') iconClass: string;
  @Input('outline') outline: boolean = false;
  @Input('disabled') disabled: boolean = false;

  constructor() { }

  public getClassName(): string {
    let name = 'btn';
    if (this.type) {
      if (this.outline) {
        name += ` btn-outline-${this.type}`;
      } else {
        name += ` btn-${this.type}`;
      }
    }
    return name;
  }

}
