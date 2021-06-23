import {Component, Input} from '@angular/core';
import {MainColors} from '../../models/colors';

export interface GridListItem {
  title: string;
  subtitle?: string;
  iconClass: string;
  iconColor: MainColors | string;
  iconOutline: boolean;
  thumbnailPicture: string;
  bodyPicture: string;
  iconCallback(): void;
  titleCallback(): void;
  subtitleCallback(): void;
  bodyCallback(): void;
}

@Component({
  selector: 'pm-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent {

  @Input() displayStyle: 'list' | 'grid' = 'grid';
  @Input() items: GridListItem[];
  @Input() gridHeaderReverse = false;
  @Input() bodyBackgroundColor;

  constructor() { }

}
