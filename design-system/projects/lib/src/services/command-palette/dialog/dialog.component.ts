import {Component, ElementRef, AfterViewInit, ViewChild, HostListener, Renderer2, OnDestroy} from '@angular/core';
import {ComponentInjectorService} from '../component-injector.service';
import {Observable} from 'rxjs';
import _ from 'lodash';
import {DOCUMENT} from '@angular/common';

export interface PaletteEntry {
  label: string;
  id: string;
  entries?: PaletteEntry[]; // deve obrigatoriamente ter APENAS ou 'entries' ou 'action'
  action?: () => void | Observable<any>;
}

@Component({
  selector: 'pm-command-palette-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements AfterViewInit, OnDestroy {

  @ViewChild('rootPanel', {static: true}) rootPanelComponent: ElementRef;
  @ViewChild('searchResultContainer', {static: true}) searchResultContainer: ElementRef;
  public searchString = '';
  public placeholderString = 'Digite sua busca...';
  public searchIdTree = []; // utilizado para navegar entre os ids da lista de entradas
  public itself: any;
  private unlistener: () => void;

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

  constructor(
    private componentInjectorService: ComponentInjectorService,
    private renderer2: Renderer2
  ) {
    document.documentElement.style.setProperty(`overflow-x`, `hidden`, 'important');
    this.currentPaletteEntries = [...this.paletteEntries];
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
      this.rootPanelComponent.nativeElement.children[0].focus();
    }, 50);
  }

  public focusNext(): void {
    const currentFocus = document.activeElement;
    const resultEntries: Element[] = Array.from(this.searchResultContainer.nativeElement.getElementsByClassName('result-entry cursor-pointer'));
    const currentFocusIndex = -1; // resultEntries.findIndex(item => item === currentFocus);
    if (!!currentFocusIndex) {
      setTimeout(() => {
        // resultEntries[currentFocusIndex + 1].focus();
      }, 50);
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
        return paletteEntry.label.includes(searchValue) || paletteEntry.id.includes(searchValue);
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
      let entries;
      if (!!this.currentPaletteEntries && this.currentPaletteEntries.length > 0 && this.currentPaletteEntries[0].id === 'results') {
        entries = this.currentPaletteEntries[0].entries;
      } else {
        entries = this.currentPaletteEntries;
      }
      this.currentPaletteEntries = [{
        label: 'Results',
        id: 'results',
        entries: flatEntriesToEntries(entriesToFlat(entries), entries)
      }];
    } else {
      this.searchIdTree = [];
      this.currentPaletteEntries = [...this.paletteEntries];
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
      this.currentPaletteEntries = [paletteEntry];
      this.searchString += `${paletteEntry.id} > `;
    } else {
      paletteEntry.action();
    }
  }

}
