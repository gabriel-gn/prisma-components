import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface ComboItem {
  label: string;
  value: any;
}

@Component({
  selector: 'pm-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.scss']
})
export class ComboBoxComponent implements OnInit {

  @Input() items: ComboItem[] = [];
  @Input() selectedItem: any;
  @Input() disabled = false;
  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.ref.detectChanges();
  }

  private selectionChanged(event: any): void {
    this.selectionChange.emit(event.value);
    this.ref.detectChanges();
  }

  public setSelected(item: any): void {
    this.selectedItem = item;
    this.selectionChange.emit(item);
  }

}
