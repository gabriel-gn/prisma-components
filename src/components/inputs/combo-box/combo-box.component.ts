import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

export interface ComboItem {
  label: string;
  value: any;
}

@Component({
  selector: 'pm-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComboBoxComponent implements OnInit {

  /**
   * Itens que serão exibidos na combo box.
   * Devem ser obrigatoriamente do tipo `ComboItem[]`
   */
  @Input() items: ComboItem[] = [];
  /**
   * Item selecionado da combobox. Pode ser carregado previamente
   */
  @Input() selectedItem: any;
  /**
   * Desabilita a interação com os valores da combo box.
   */
  @Input() disabled: boolean = false;
  /**
   * Emite um valor booleano com o novo valor do item selecionado na combo box.
   */
  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.ref.detectChanges();
  }

  public setSelected(item: any): void {
    this.selectedItem = item;
    this.selectionChange.emit(item);
  }

  public selectionChanged(event: any): void {
    this.selectionChange.emit(event.value);
    this.ref.detectChanges();
  }

}
