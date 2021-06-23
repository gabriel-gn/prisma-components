import {Component, Input} from '@angular/core';
import {Sizes} from '../../models/sizes';

@Component({
  selector: 'pm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() hoverable = false;
  @Input() borderRadius: Sizes = Sizes.md;

  constructor() { }

}
