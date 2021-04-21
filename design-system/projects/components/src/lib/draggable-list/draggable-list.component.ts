import {Component, Input} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'pm-draggable-list',
  templateUrl: './draggable-list.component.html',
  styleUrls: ['./draggable-list.component.scss']
})
export class DraggableListComponent {

  @Input('showIndex') showIndex = true;
  @Input('itemList') itemList: any[] = [
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

  public getItemList(): any[] {
    return this.itemList;
  }

  public setItemList(itemList: any[]): void {
    this.itemList = itemList;
  }

  /**
   * Evento de drop do cdkDragDrop
   * @param event: evento de drop
   * @param profileList: lista a ser dropado
   */
  public drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.itemList, event.previousIndex, event.currentIndex);
  }

}
