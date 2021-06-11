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
  @Input() value: any = 1;
  @Input() disabled = false;
  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.ref.detectChanges();
  }

  selectionChanged(event: any): void {
    this.selectionChange.emit(event.value);
  }

}
