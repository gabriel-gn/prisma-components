import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {concatMap, delay, Observable, of, tap} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import _ from 'lodash';
import {MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MatAutocompleteTrigger} from '@angular/material/autocomplete';
import {Sizes} from '../../../models/sizes';

export interface MultiSelectOption {
  label: string;
  value: any;
  thumbnail?: string;
}

@Component({
  selector: 'pm-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  providers: [
    {
      provide: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,
      useValue: {
        autoActiveFirstOption: false,
        overlayPanelClass: 'pm-multi-select-autocomplete-panel'
      }
    }
  ]
})
export class MultiSelectComponent implements OnInit, AfterViewInit {

  @ViewChild('inputBox', {static: true}) inputBoxEl: ElementRef;
  @ViewChild('trigger', {static: true}) trigger: MatAutocompleteTrigger;
  /**
   * Ao ser selecionada uma opção nova, emite
   */
  @Output() selectedOptionsChanged = new EventEmitter<MultiSelectOption[]>();
  /**
   * Texto a ser exibido no input
   */
  @Input() placeholder: string = '';
  /**
   * opções a serem exibidas no input
   */
  @Input() options: MultiSelectOption[] = [];
  @Input() borderRadius: Sizes = Sizes.md;
  /**
   * se as thumbnails serão arredondadas
   */
  @Input() roundedThumbnail: boolean = true;
  /**
   * limite máximo de seleções de itens
   */
  @Input() limit: number = 0;
  /**
   * Opções que ja vem selecionadas
   */
  @Input() selectedOptions: MultiSelectOption[] = [];
  @Input() observableInput: (search: string) => Observable<MultiSelectOption[]> = (search: string) => {
    let call: Observable<any>;
    if (`${search}`.length > 3) {
      call = of([{label: `${search}`, value: `${search}` }]);
    } else {
      call = of([]);
    }
    return call.pipe(
      delay(2000),
    )
  };
  public _observableInputLoading: boolean = false;

  public readonly myControl: FormControl;
  public inputValue: string = '';
  public filteredOptions: Observable<MultiSelectOption[]>;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    this.myControl = new FormControl();
  }

  ngOnInit(): void {
    if (this.observableInput(`${this.myControl.value}`)) {
      this.filteredOptions = this.myControl.valueChanges.pipe(
        tap(() => {this.observableInputLoading = true}),
        concatMap(() => this.observableInput(`${this.myControl.value}`)),
        tap(() => {this.observableInputLoading = false}),
      );
    } else {
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => (typeof value === 'string' ? value : `${value.label}`)),
        map(label => this._filter(label)),
      );
    }
  }

  ngAfterViewInit(): void {
    this.clearInput();
  }

  public set observableInputLoading(state: boolean) {
    this._observableInputLoading = state;
    this.cdr.detectChanges();
  }

  /**
   * Função utilizada para colocar texto na caixa de input ao selecionar uma opção
   * @param user
   */
  displayFn(option: MultiSelectOption): string {
    return '';
    // return option && option.label ? option.label : '';
  }

  private _filter(label: string): MultiSelectOption[] {
    const filterValue = label.toLowerCase();

    return _.difference(
      this.options.filter(option => option.label.toLowerCase().includes(filterValue)),
      this.selectedOptions
    );
  }

  public selectOption(option: any): void {
    this.selectedOptions.push(option);
    this.selectedOptionsChanged.emit(this.selectedOptions);
    this.clearInput();
  }

  private clearInput(): void {
    this.inputValue = '';
    this.myControl.setValue(this.inputValue);
    try { this.inputBoxEl.nativeElement.blur(); } catch (e) {}
    this.cdr.detectChanges();
  }

  public removeSelectedOption(option: MultiSelectOption): void {
    _.remove(this.selectedOptions, option);
    this.clearInput();
  }

  public isOptionSelected(option: MultiSelectOption): boolean {
    return !!this.selectedOptions.find(sOptions => _.isEqual(sOptions, option));
  }

  public openSelect(): void {
    // setTimeout(() => {
    //   try { this.inputBoxEl.nativeElement.focus(); } catch (e) {}
    // }, 0);
    this.trigger.openPanel();
  }

  public clearSelected(): void {
    this.selectedOptions = [];
    this.selectedOptionsChanged.emit(this.selectedOptions);
    this.clearInput();
  }

  public togglePanel(): void {
    if (this.trigger.panelOpen === false) {
      this.trigger.openPanel();
    } else {
      this.trigger.closePanel();
    }
  }

}
