import { Component, Input } from '@angular/core';

@Component({
  selector: 'pm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input('label') label: string | null;
  @Input('pink') pink: boolean;

  constructor() { }

}
