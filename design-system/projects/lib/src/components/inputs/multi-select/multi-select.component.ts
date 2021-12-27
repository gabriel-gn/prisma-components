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
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import _ from 'lodash';
import {MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MatAutocompleteTrigger} from '@angular/material/autocomplete';
import {Sizes} from '../../../models/sizes';

export interface MultiSelectOption {
  label: string;
  value: any;
  thumbnail: string;
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

  @ViewChild('inputBox') inputBoxEl: ElementRef;
  @ViewChild('trigger') trigger: MatAutocompleteTrigger;
  /**
   * Ao ser selecionada uma opção nova, emite
   */
  @Output() selectedOptions = new EventEmitter<MultiSelectOption[]>();
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
  myControl = new FormControl();
  _selectedOptions: MultiSelectOption[] = [];
  filteredOptions: Observable<MultiSelectOption[]>;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : `${value.label}`)),
      map(label => this._filter(label)),
    );
  }

  ngAfterViewInit(): void {
    this.clearInput();
  }

  displayFn(user: MultiSelectOption): string {
    return user && user.label ? user.label : '';
  }

  private _filter(label: string): MultiSelectOption[] {
    const filterValue = label.toLowerCase();

    return _.difference(
      this.options.filter(option => option.label.toLowerCase().includes(filterValue)),
      this._selectedOptions
    );
  }

  public selectOption(option: any): void {
    this._selectedOptions.push(option);
    this.selectedOptions.emit(this._selectedOptions);
    this.clearInput();
  }

  private clearInput(): void {
    this.myControl.setValue('');
    try { this.inputBoxEl.nativeElement.blur(); } catch (e) {}
    this.cdr.detectChanges();
  }

  public removeSelectedOption(option: MultiSelectOption): void {
    _.remove(this._selectedOptions, option);
    this.clearInput();
  }

  public isOptionSelected(option: MultiSelectOption): boolean {
    return !!this._selectedOptions.find(sOptions => _.isEqual(sOptions, option));
  }

  public openSelect(): void {
    setTimeout(() => {
      try { this.inputBoxEl.nativeElement.focus(); } catch (e) {}
    }, 0);
  }

  public clearSelected(): void {
    this._selectedOptions = [];
    this.selectedOptions.emit(this._selectedOptions);
    this.clearInput();
  }

}
