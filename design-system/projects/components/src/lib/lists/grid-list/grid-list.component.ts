import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {MainColors} from '../../../models/colors';

export interface GridListItem {
  title: string;
  subtitle?: string;
  context?: any;
  iconClass?: string;
  iconColor?: MainColors | string;
  iconOutline?: boolean;
  thumbnailPicture?: string;
  bodyPicture: string;
  iconCallback?: void;
  titleCallback?: void;
  subtitleCallback?: void;
  bodyCallback?: void;
}

@Component({
  selector: 'pm-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent {

  @ViewChild('gridTemplate', {static: true}) gridTemplateRef: TemplateRef<any>;
  @ViewChild('listTemplate', {static: true}) listTemplateRef: TemplateRef<any>;
  @ViewChild('galleryTemplate', {static: true}) galleryTemplateRef: TemplateRef<any>;
  @Input() displayStyle: 'list' | 'grid' | 'gallery' = 'grid';
  @Input() overflowGallery: boolean = true;
  @Input() items: GridListItem[];
  @Input() gridHeaderReverse: boolean = false;
  @Input() bodyBackgroundColor: string;
  @Input() actionTemplate: TemplateRef<any>;

  constructor() { }

  public getTemplate(): TemplateRef<any> {
    switch (this.displayStyle) {
      case 'grid':
        return this.gridTemplateRef;
      case 'gallery':
        return this.galleryTemplateRef;
      case 'list':
        return this.listTemplateRef;
      default:
        return this.gridTemplateRef;
    }
  }

}
