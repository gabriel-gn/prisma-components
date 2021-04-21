import {Component, Input, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import {TemplatePortal} from '@angular/cdk/portal';
import {fromEvent, Subscription} from 'rxjs';
import {filter, take} from 'rxjs/operators';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';

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

  sub: Subscription;
  overlayRef: OverlayRef | null;
  @ViewChild('contextMenu') contextMenu: TemplateRef<any>;

  constructor(
    public overlay: Overlay,
    public viewContainerRef: ViewContainerRef,
  ) {
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

  public openContextMenu({ x, y }: MouseEvent, context): void {
    this.closeContextMenu();
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo({ x, y })
      .withPositions([
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        }
      ]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.close()
    });

    this.overlayRef.attach(new TemplatePortal(this.contextMenu, this.viewContainerRef, context));

    this.sub = fromEvent<MouseEvent>(document, 'click')
      .pipe(
        filter(event => {
          const clickTarget = event.target as HTMLElement;
          return !!this.overlayRef && !this.overlayRef.overlayElement.contains(clickTarget);
        }),
        take(1)
      ).subscribe(() => this.closeContextMenu())
  }

  public closeContextMenu(): void {
    // tslint:disable-next-line:no-unused-expression
    this.sub && this.sub.unsubscribe();
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }

}
