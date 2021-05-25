import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MainColors} from '../../models/colors';

@Component({
  selector: 'pm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input('label') label: string | null = '';  // Usada só pra aparecer no storybook
  @Input('type') type: MainColors = MainColors.default;
  @Input('busy') busy = false;
  @Input('busyText') busyText: string;
  @Input('iconClass') iconClass: string;
  @Input('outline') outline = false;
  // @Output() onClick = new EventEmitter<any>();

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
