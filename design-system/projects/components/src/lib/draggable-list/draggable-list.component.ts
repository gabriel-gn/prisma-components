import {Component} from '@angular/core';

@Component({
  selector: 'pm-draggable-list',
  templateUrl: './draggable-list.component.html',
  styleUrls: ['./draggable-list.component.scss']
})
export class DraggableListComponent {

  itemList = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];

  constructor() {
  }

}
