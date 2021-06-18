import {Component, Input} from '@angular/core';

export interface GridListItem {
  iconClass: string;
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

  @Input() displayStyle: 'list' | 'grid' = 'list';
  @Input() items: GridListItem[];
  @Input() gridHeaderReverse = true;

  constructor() { }

}
