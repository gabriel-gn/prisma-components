import {Component, Input} from '@angular/core';
import {OrientationEnum} from '../../../models/orientation';

export interface IconCardArrayItem {
  title: string;
  subtitle: string;
  iconClass: string;
}

@Component({
  selector: 'pm-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss']
})
export class IconCardComponent {

  @Input('textPosition') textPosition: 'start' | 'end' | 'center' = 'center';
  @Input('paddingClass') paddingClass: string = 'p-3';
  @Input('hoverable') hoverable: boolean = true;
  @Input('orientation') orientation: OrientationEnum = OrientationEnum.Y;
  @Input('iconClass') iconClass: string = 'uil uil-star';
  @Input('title') title: string = '';
  @Input('subtitle') subtitle: string = '';
  @Input('iconCardArray') iconCardArray: IconCardArrayItem[] = [];

  constructor() { }

}
