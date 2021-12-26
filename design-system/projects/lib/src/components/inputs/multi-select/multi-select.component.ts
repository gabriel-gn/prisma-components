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

export interface MultiSelectOption {
  label: string;
  value: any;
}

@Component({
  selector: 'pm-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit, AfterViewInit {

  @ViewChild('inputBox') inputBox: ElementRef;
  @Output() selectedOptions = new EventEmitter<MultiSelectOption[]>();
  @Input() placeholder: string = 'Busque algo';
  @Input() options: MultiSelectOption[] = [
    {label: 'Mary', value: {}},
    {label: 'Shelley', value: {}},
    {label: 'Gabs', value: {}},
    {label: 'Pedrocs', value: {}},
    {label: 'Rics', value: {}},
    {label: 'Ana', value: {}},
    {label: 'Igor', value: {}}
  ];
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
    this.inputBox.nativeElement.blur();
    this.cdr.detectChanges();
  }

  public removeSelectedOption(option: MultiSelectOption): void {
    _.remove(this._selectedOptions, option);
    this.clearInput();
  }

  public isOptionSelected(option: MultiSelectOption): boolean {
    return !!this._selectedOptions.find(sOptions => _.isEqual(sOptions, option));
  }

}
