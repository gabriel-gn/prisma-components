import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'pm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input('label') label: string | null = '';  // Usada só pra aparecer no storybook
  @Input('type') type: 'default' | 'primary' | 'info' = 'default';
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

}
