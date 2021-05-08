import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {Sizes} from '../../models/sizes';

@Component({
  selector: 'pm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Output() onItemListChange = new EventEmitter();
  @Input() columns: string[] = [];
  @Input() columnNames: string[] = [];
  @Input() imageColumns: string[] = [];
  @Input() imageHeight: '50px';
  @Input() showHeader = true;
  @Input() numberFormat = '1.2-2';
  @Input() numberPrefix = '';
  @Input() actionsTemplate: TemplateRef<any>;
  @Input() itemList: any[] = [];
  @Input() borderRadius: Sizes;
  @Input() backgroundColor: string;

  @ViewChild('singleLabelCell', {static: true}) singleLabelCell: TemplateRef<any>;
  @ViewChild('doubleLabelCell', {static: true}) doubleLabelCell: TemplateRef<any>;
  @ViewChild('imageCell', {static: true}) imageCell: TemplateRef<any>;
  @ViewChild('formattedNumberCell', {static: true}) formattedNumberCell: TemplateRef<any>;

  constructor() {
  }

  ngOnInit(): void {
    if (typeof this.actionsTemplate !== 'undefined') {
      this.columns.push('ACTIONS');
      this.columnNames.push('');
    }
  }

  /**
   * Retorna a lista atual de itens na tabela
   */
  public getItemList(): any[] {
    return this.itemList;
  }

  /**
   * Troca a lista de itens da tabela
   */
  public setItemList(itemList: any[]): void {
    this.itemList = itemList;
    this.onItemListChange.emit(true);
  }

  /**
   * Mostra a linha de header
   */
  public enableHeader(): void {
    this.showHeader = true;
  }

  /**
   * Some com a linha de header
   */
  public disableHeader(): void {
    this.showHeader = false;
  }

  /**
   * Retorna o template que será renderizada a celula de acordo com o input de item e coluna
   * @param item: item da lista de itens
   * @param column: propriedade do item
   */
  public getCellTemplate(item: any, column: string): TemplateRef<any> {
    if (column === 'ACTIONS') {
      return this.actionsTemplate;
    } else if (Array.isArray(item[column])) {
      return this.doubleLabelCell;
    } else {
      if (this.imageColumns.includes(column)) {
        return this.imageCell;
      } else {
        if (!isNaN(item[column])) {
          return this.formattedNumberCell;
        } else {
          return this.singleLabelCell;
        }
      }
    }
  }
}
