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
import {UntypedFormControl} from '@angular/forms';
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

  public selectOption(option: any): void {
    this.selectedOptions.push(option);

    if (this.sortSelectedItems) {
      this.selectedOptions = this.selectedOptions.sort((a, b) => {
        return this.options.indexOf(a) - this.options.indexOf(b);
      });
    }

    this.selectedOptionsChanged.emit(this.selectedOptions);
    this.blurInputSelect();
    this.clearInput();
  }

  private clearInput(): void {
    this.inputValue = '';
    this.myControl.setValue(this.inputValue);
    this.cdr.detectChanges();
  }

  public removeSelectedOption(option: MultiSelectOption): void {
    _.remove(this.selectedOptions, option);
    this.trigger.closePanel();
    this.clearInput();
  }

  public isOptionSelected(option: MultiSelectOption): boolean {
    return !!this.selectedOptions.find(sOptions => _.isEqual(sOptions, option));
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
    this.selectedOptionsChanged.emit(this.selectedOptions);
    this.clearInput();
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
