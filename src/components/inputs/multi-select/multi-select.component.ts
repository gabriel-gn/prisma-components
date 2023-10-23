import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, UntypedFormControl} from '@angular/forms';
import {catchError, concatMap, debounceTime, distinctUntilChanged, Observable, of, tap} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import _ from 'lodash';
import {MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MatAutocompleteTrigger} from '@angular/material/autocomplete';
import {Sizes} from '../../../models/sizes';

export interface MultiSelectOption {
  label: string;
  value: any;
  thumbnail?: string;
}

function isMultiSelectOption(value: any) {
  return value.hasOwnProperty('label') && value.hasOwnProperty('value');
}

@Component({
  selector: 'pm-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,
      useValue: {
        autoActiveFirstOption: false,
        overlayPanelClass: 'pm-multi-select-autocomplete-panel'
      }
    },
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: MultiSelectComponent
    }
  ]
})
export class MultiSelectComponent implements OnInit, AfterViewInit, ControlValueAccessor {

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
  private _selectedOptions: MultiSelectOption[] = [];
  @Input() set selectedOptions(options: (MultiSelectOption | any)[]) {
    options = options
      .reduce((acc: any[], val: any) => {
        if (isMultiSelectOption(val)) {
          return [...acc, val];
        } else {
          return [...acc, this.options.find((option: MultiSelectOption) => _.isEqual(option.value, val))];
        }
      }, [])
      // filtra as opções do "find" que podem ser undefined
      .filter(i => !!i) as unknown as MultiSelectOption[];
    this._selectedOptions = options;
    this.selectedOptionsChanged.emit(this.selectedOptions);
    this.propagateChange(this.selectedOptions);
    this.clearInput();
  };
  public get selectedOptions() {
    return this._selectedOptions;
  }
  /**
   * sort selected items instead of showing them in selected sequence
   */
  @Input() sortSelectedItems: boolean = true;
  @Input() observableInput: (search: string) => Observable<MultiSelectOption[]>;
  /**
   * Tempo de espera em cada execução de chamada do observable ao digitar no campo de input
   */
  @Input() observableDebounce: number = 100;
  /**
   * Caso a flag seja "true", desativa o foco no input, escondendo o teclado virtual no mobile
   */
  @Input() unfocusOnSelect: boolean = true;
  /**
   * Caso a flag seja "true", mostra o botão "X" de remover cada item da lista de selecionados.
   * Caso contrário, ao clicar sobre um item, remove ele da lista de selecionados
   */
  @Input() showRemoveButton: boolean = false;
  public _observableInputLoading: boolean = false;

  public readonly myControl: UntypedFormControl;
  public inputValue: string = '';
  public filteredOptions: Observable<MultiSelectOption[]>;

  onChange = (selectedOptions) => {};
  onTouched = () => {};
  touched = false;
  disabled = false;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    this.myControl = new UntypedFormControl();
  }

  ngOnInit(): void {
    if (this.observableInput) {
      this.filteredOptions = this.myControl.valueChanges.pipe(
        debounceTime(this.observableDebounce),
        distinctUntilChanged(),
        tap(() => {this.observableInputLoading = true}),
        concatMap(() => this.observableInput(`${this.myControl.value}`).pipe(
          catchError(error => {this.observableInputLoading = false; return of(null); }),
        )),
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

  writeValue(value: MultiSelectOption[]) {
    this.selectedOptions = value;
  }

  propagateChange = (_: any) => {};
  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  public selectOption(option: any): void {
    const currentOptions = this.selectedOptions;
    currentOptions.push(option);

    if (this.sortSelectedItems) {
      this.selectedOptions = currentOptions.sort((a, b) => {
        return this.options.indexOf(a) - this.options.indexOf(b);
      });
    } else {
      this.selectedOptions = currentOptions;
    }
    this.blurInputSelect();
  }

  private clearInput(): void {
    this.inputValue = '';
    this.myControl.setValue(this.inputValue);
    this.cdr.detectChanges();
  }

  public removeSelectedOption(option: MultiSelectOption): void {
    _.remove(this.selectedOptions, option);
    this.selectedOptions = this.selectedOptions;
    this.trigger.closePanel();
    this.clearInput();
  }

  public isOptionSelected(option: (MultiSelectOption|any)): boolean {
    if (isMultiSelectOption(option)) {
      return !!this.selectedOptions.find(sOptions => _.isEqual(sOptions, option));
    } else {
      return !!this.selectedOptions.find((sOptions) => _.isEqual(sOptions.value, option));
    }
  }

  /**
   * Use this method instead of "trigger.openPanel()" because it has some validations before opening the panel
   */
  public openSelect(): void {
    if (this.isLimitReached() === false) {
      this.trigger.openPanel();
    }
  }

  /**
   * Use this method instead of "trigger.closePanel()" because it has some validations before closing the panel
   */
  public closeSelect(): void {
    this.trigger.closePanel();
  }

  public clearSelected(): void {
    this.selectedOptions = [];
  }

  public togglePanel(): void {
    if (this.trigger.panelOpen === false) {
      this.openSelect();
    } else {
      this.closeSelect();
    }
  }

  public isLimitReached() {
    return !this.observableInput // caso tenha observable input, as options são dinâmicas, e não armazenadas no componente
      && (this.selectedOptions.length === this.options.length || (!!this.limit && this.selectedOptions.length >= this.limit))
  }

  public blurInputSelect() {
    if (this.unfocusOnSelect) {
      setTimeout(() => {
        try {
          this.inputBoxEl.nativeElement.blur();
        } catch (e) {}
      });
    }
  }

}
