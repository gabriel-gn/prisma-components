import {Component, Input} from '@angular/core';
import {Sizes} from '../../../models/sizes';

@Component({
  selector: 'pm-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent {

  @Input('hoverable') hoverable = false;
  @Input('borderRadius') borderRadius: Sizes = Sizes.md;
  @Input('paddingClass') paddingClass: string = 'p-3';

  constructor() {
  }

}
