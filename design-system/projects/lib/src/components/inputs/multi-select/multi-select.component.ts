import {ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith, filter} from 'rxjs/operators';
import _ from 'lodash';

export interface User {
  name: string;
}

@Component({
  selector: 'pm-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

  @Input() placeholder: string = 'Busque algo';
  @Output() selectedOptions = new EventEmitter<User[]>();
  @ViewChild('inputBox') inputBox: ElementRef;
  myControl = new FormControl();
  searchString: string = '';
  options: User[] = [
    {name: 'Mary'},
    {name: 'Shelley'},
    {name: 'Gabs'},
    {name: 'Pedrocs'},
    {name: 'Rics'},
    {name: 'Ana'},
    {name: 'Igor'}
  ];
  _selectedOptions: User[] = [];
  filteredOptions: Observable<User[]>;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => this._filter(name)),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options
    .filter(option => this._selectedOptions.includes(option) === false)
    .filter(option => option.name.toLowerCase().includes(filterValue))
    ;
  }

  public selectOption(option: any): void {
    this.clearInput();
    this._selectedOptions.push(option);
    this._selectedOptions = _.uniqBy(this._selectedOptions, 'name');
    this.searchString = '';
    console.log(this._selectedOptions);
    this.selectedOptions.emit(this._selectedOptions);
    this.clearInput();
  }

  private clearInput(): void {
    this.myControl.setValue('');
    this.inputBox.nativeElement.blur();
    this.cdr.detectChanges();
  }

  public removeSelectedOption(option: any): void {
    _.remove(this._selectedOptions, option);
    this.clearInput();
  }

}
