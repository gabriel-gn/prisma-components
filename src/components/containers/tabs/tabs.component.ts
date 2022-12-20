import {Component, Input} from '@angular/core';

@Component({
  selector: 'pm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {

  /**
   * Tab orientation
   */
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal'
  /**
   * Sticky to top or bottom
   */
  @Input() sticky: boolean = true

  constructor() {
  }

}
