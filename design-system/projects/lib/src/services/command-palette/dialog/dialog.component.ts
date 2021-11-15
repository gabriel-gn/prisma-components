import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
  Renderer2,
  OnDestroy,
  ViewChildren, QueryList, Directive
} from '@angular/core';
import {ComponentInjectorService} from '../component-injector.service';
import {Observable} from 'rxjs';
import _ from 'lodash';
import {isNumeric} from 'rxjs/internal-compatibility';

export interface PaletteEntry {
  label: string;
  id: string;
  entries?: PaletteEntry[]; // deve obrigatoriamente ter APENAS ou 'entries' ou 'action'
  action?: () => void | Observable<any>;
}

// tslint:disable-next-line:directive-selector directive-class-suffix
@Directive({selector: '.result-entry'}) export class ResultSearchElements {
  //
}

@Component({
  selector: 'pm-command-palette-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements AfterViewInit, OnDestroy {

  @ViewChild('rootPanel', {static: true}) rootPanelComponent: ElementRef;
  @ViewChild('searchResultContainer', {static: true}) searchResultContainer: ElementRef;
  @ViewChildren(ResultSearchElements, { read: ElementRef }) resultEntryElements: QueryList<ElementRef>;
  public searchString = '';
  public placeholderString = 'Digite sua busca...';
  public searchIdTree = []; // utilizado para navegar entre os ids da lista de entradas
  public itself: any;
  private currentFocusedElement: ElementRef;
  private unlistener: () => void;
  private deleteLatestSearchEntryOnDelete: boolean = false;

  public paletteEntries: PaletteEntry[] = [
    {
      label: 'Pages',
      id: 'pages',
      entries: [
        {
          label: 'Dashboard',
          id: 'dashboard',
          action: () => {
            console.log('dashboard');
          }
        },
        {
          label: 'Notifications',
          id: 'notifications',
          action: () => {
            console.log('notifications');
          }
        }
      ]
    },
    {
      label: 'Preferences',
      id: 'preferences',
      entries: [
        {
          label: 'Change Theme',
          id: 'theme',
          entries: [
            {
              label: 'Light',
              id: 'light',
              action: () => {
                console.log('LIGHT THEME');
              }
            },
            {
              label: 'Dark',
              id: 'dark',
              action: () => {
                console.log('DARK THEME');
              }
            }
          ]
        }
      ]
    }
  ];
  public currentPaletteEntries: PaletteEntry[];
  public searchPaletteEntries: PaletteEntry[];

  constructor(
    private componentInjectorService: ComponentInjectorService,
    private renderer2: Renderer2
  ) {
    document.documentElement.style.setProperty(`overflow-x`, `hidden`, 'important');
    this.currentPaletteEntries = [...this.paletteEntries];
    this.searchPaletteEntries = [...this.paletteEntries];
  }

  public ngAfterViewInit(): void {
    this.focusSearchInput();
    this.unlistener = this.renderer2.listen('window', 'focusin', event => {
      if (!(
        event.target === this.rootPanelComponent.nativeElement
        || this.rootPanelComponent.nativeElement.contains(event.target)
      )) {
        this.destroyItself();
      }
    });
  }

  private focusSearchInput(): void {
    setTimeout(() => {
      this.currentFocusedElement = this.rootPanelComponent;
      this.rootPanelComponent.nativeElement.children[0].children[1].focus();
    }, 50);
  }

  private isSearchInputFocused(): boolean {
    return this.currentFocusedElement === this.rootPanelComponent;
  }

  public focusNext(): void {
    const arrayResultEntryElements = this.resultEntryElements.toArray();
    const currentFocusIndex = arrayResultEntryElements.findIndex(item => item === this.currentFocusedElement);
    const focusNextIndex = currentFocusIndex + 1;
    if (focusNextIndex >= arrayResultEntryElements.length) {
      this.focusSearchInput();
    }
    else if (isNumeric(focusNextIndex)) {
      this.currentFocusedElement = arrayResultEntryElements[focusNextIndex];
      this.currentFocusedElement.nativeElement.focus();
    } else {
      this.focusSearchInput();
    }
  }

  public focusPrevious(): void {
    const arrayResultEntryElements = this.resultEntryElements.toArray();
    const currentFocusIndex = arrayResultEntryElements.findIndex(item => item === this.currentFocusedElement);
    const focusPreviousIndex = currentFocusIndex - 1;
    if (focusPreviousIndex < 0) {
      this.focusSearchInput();
    }
    else if (isNumeric(focusPreviousIndex)) {
      this.currentFocusedElement = arrayResultEntryElements[focusPreviousIndex];
      this.currentFocusedElement.nativeElement.focus();
    } else {
      this.focusSearchInput();
    }
  }

  public destroyItself(): void {
    this.componentInjectorService.removeComponentFromBody(this.itself);
  }

  public ngOnDestroy(): void {
    document.documentElement.style.removeProperty(`overflow-x`);
  }

  public searchAction(searchValue: string): void {
    const entriesToFlat: (paletteEntries: PaletteEntry[]) => string[] = (paletteEntries: PaletteEntry[]) => {
      const idTreeArray = [];

      const isSearchValueInEntry: (paletteEntry: PaletteEntry) => boolean = (paletteEntry: PaletteEntry) => {
        return paletteEntry.label.toLowerCase().includes(searchValue.toLowerCase())
          || paletteEntry.id.toLowerCase().includes(searchValue.toLowerCase());
      };

      const entryToFlat: (paletteEntry: PaletteEntry, idPrefix: string) => void = (paletteEntry: PaletteEntry, idPrefix: string = '') => {
        idPrefix = !!idPrefix ? `${idPrefix}` : `${paletteEntry.id}`;
        if (this.hasChildEntries(paletteEntry)) {
          idTreeArray.push(`${idPrefix}`);
          for (let i = 0; i < paletteEntry.entries.length; i++) {
            const entry = paletteEntry.entries[i];
            const idSuffix = `.entries[${i}]`;
            entryToFlat(entry, `${idPrefix}${idSuffix}`);
          }
        } else {
          if (isSearchValueInEntry(paletteEntry)) {
            idTreeArray.push(`${idPrefix}`);
          }
        }
      };

      if (paletteEntries.length > 0 && paletteEntries[0].id === 'results') {
        paletteEntries = paletteEntries[0].entries;
      }
      const resultEntry: PaletteEntry = {
        label: 'Results',
        id: 'results',
        entries: paletteEntries
      };

      entryToFlat(resultEntry, '');
      return idTreeArray.slice(1);
    };

    const flatEntriesToEntries: (flatEntries: string[], entriesToCheck: PaletteEntry[]) => PaletteEntry[] = (flatEntries: string[], entriesToCheck: PaletteEntry[]) => {
      const resultObjToCheck = {results: {entries: [...entriesToCheck]}};
      const entries: PaletteEntry[] = [];
      for (const flatEntry of flatEntries) {
        const entryToAdd = _.get(resultObjToCheck, flatEntry);
        entries.push(entryToAdd);
      }
      return _.uniqWith(entries, _.isEqual); // remove objetos iguais
    };

    if (!!searchValue) {
      this.deleteLatestSearchEntryOnDelete = false;
      let entries;
      if (!!this.searchPaletteEntries && this.searchPaletteEntries.length > 0 && this.searchPaletteEntries[0].id === 'results') {
        entries = this.searchPaletteEntries[0].entries;
      } else {
        entries = this.searchPaletteEntries;
      }
      this.searchPaletteEntries = [{
        label: 'Results',
        id: 'results',
        entries: flatEntriesToEntries(entriesToFlat(entries), entries)
      }];
    } else {
      if (this.deleteLatestSearchEntryOnDelete) {
        this.goBackOneLevel();
      }
      this.deleteLatestSearchEntryOnDelete = true;
      this.searchPaletteEntries = [...this.currentPaletteEntries];
    }
  }

  public goBackOneLevel(): void {
    if (this.isSearchInputFocused()) {
      if (this.searchIdTree.length === 0) {
        this.destroyItself();
      } else {
        this.searchIdTree.pop();
        this.focusSearchInput();
      }
    } else {
      this.focusSearchInput();
    }
  }

  public hasChildEntries(paletteEntry: PaletteEntry): boolean {
    return paletteEntry?.entries && paletteEntry.entries.length > 0;
  }

  /**
   * caso tenha child entries, atualiza o dialog, senão executa a ação da entry.
   */
  public paletteEntryAction(paletteEntry: PaletteEntry): void {
    if (this.hasChildEntries(paletteEntry)) {
      this.searchIdTree.push(paletteEntry.id);
      this.searchPaletteEntries = [paletteEntry];
      this.currentPaletteEntries = [paletteEntry];
      this.searchString = '';
      this.focusSearchInput();
    } else {
      paletteEntry.action();
      this.destroyItself();
    }
  }

  public clearAll(): void {
    this.searchString = '';
    this.searchIdTree = [];
    this.searchPaletteEntries = [...this.paletteEntries];
    this.currentPaletteEntries = [...this.paletteEntries];
    this.focusSearchInput();
  }

}
