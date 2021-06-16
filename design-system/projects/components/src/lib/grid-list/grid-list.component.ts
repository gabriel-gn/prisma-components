import {Component, Input} from '@angular/core';

@Component({
  selector: 'pm-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent {

  @Input() displayStyle: 'list' | 'grid' = 'list';
  @Input() items: any[] = [].constructor(20);
  @Input() iconClass = 'uil uil-xl uil-arrow-to-bottom';
  @Input() thumbnailPicture = 'https://picsum.photos/1000/1000';
  @Input() bodyPicture = 'https://picsum.photos/800/800';
  @Input() iconCallback = () => console.log('aaaa');
  @Input() titleCallback = () => console.log('bbb');
  @Input() subtitleCallback = () => console.log('ccc');
  @Input() bodyCallback = () => console.log('ddd');

  constructor() { }

}
