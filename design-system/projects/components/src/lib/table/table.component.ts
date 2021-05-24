import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {Sizes} from '../../models/sizes';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import _ from 'lodash';

@Component({
  selector: 'pm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0px', visibility: 'hidden'})),
      state('expanded', style({height: '50px', visibility: 'visible'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent implements AfterViewInit {

  @Output() onItemListChange = new EventEmitter();
  @Input() columns: string[] = [];
  @Input() columnNames: string[] = [];
  @Input() imageColumns: string[] = [];
  @Input() imageHeight: '50px';
  @Input() showHeader = true;
  @Input() numberFormat = '1.2-2';
  @Input() numberPrefix = '';
  @Input() actionsTemplate: TemplateRef<any>;
  @Input() itemList: any = [];
  @Input() borderRadius: Sizes;
  @Input() backgroundColor: string;

  @ViewChild('table', {static: true}) table: MatTable<any>;
  @ViewChild('singleLabelCell', {static: true}) singleLabelCell: TemplateRef<any>;
  @ViewChild('doubleLabelCell', {static: true}) doubleLabelCell: TemplateRef<any>;
  @ViewChild('imageCell', {static: true}) imageCell: TemplateRef<any>;
  @ViewChild('formattedNumberCell', {static: true}) formattedNumberCell: TemplateRef<any>;

  public expandedRow: any;
  // tslint:disable-next-line:ban-types
  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  // tslint:disable-next-line:ban-types
  isNormalRow = (i: number, row: Object) => true;

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit(): void {
    if (typeof this.actionsTemplate !== 'undefined') {
      this.columns.push('ACTIONS');
      this.columnNames.push('');
    }
    this.reloadExpandedDetail();
  }

  /**
   * dá como selecionada a row atual
   * @param row
   */
  public setSelectedRow(row: any): void {
    if (row.hasOwnProperty('detailRow') === false) {
      row = { detailRow: true, element: row };
    }
    this.expandedRow = row;
  }

  /**
   * Verifica se a row é igual à selecionada
   * @param row
   */
  public isSelectedRow(row: any): boolean {
    return _.isEqual(row, this.expandedRow);
  }

  /**
   * Reconstroi os elementos da tabela para incluir o "detail row" e deixar ela expansível
   * @private
   */
  private reloadExpandedDetail(): void {
    const newItems = [];
    this.itemList.forEach(element => newItems.push(element, { detailRow: true, element }));
    this.itemList = new MatTableDataSource(newItems);
    this.changeDetectorRef.detectChanges();
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
    this.reloadExpandedDetail();
    this.onItemListChange.emit(this.itemList);
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
