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
import _ from 'lodash';
import {PaletteEntry, PaletteTreeEntry} from '../models';
import {CommandPaletteEntriesService} from '../command-palette-entries.service';

// tslint:disable-next-line:directive-selector directive-class-suffix
@Directive({selector: '.palette-result-entry'}) export class ResultSearchElements {
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
  public searchIdTree: PaletteTreeEntry[] = []; // utilizado para navegar entre os ids da lista de entradas
  public itself: any;
  private currentFocusedElement: ElementRef;
  private unlistener: () => void;
  private deleteLatestSearchEntryOnDelete: boolean = false;

  public paletteEntries: PaletteEntry[] = [];
  public currentPaletteEntries: PaletteEntry[];
  public searchPaletteEntries: PaletteEntry[];

  constructor(
    public readonly commandPaletteEntriesService: CommandPaletteEntriesService,
    private componentInjectorService: ComponentInjectorService,
    private renderer2: Renderer2
  ) {
    document.documentElement.style.setProperty(`overflow-x`, `hidden`, 'important');
    this.commandPaletteEntriesService.paletteEntries$.subscribe(entries => {
      this.paletteEntries = [...entries];
      this.currentPaletteEntries = [...this.paletteEntries];
      this.searchPaletteEntries = [...this.paletteEntries];
    });
  }

  public ngAfterViewInit(): void {
    this.clearAll();
    this.unlistener = this.renderer2.listen('window', 'focusin', event => {
      if (!(
        event.target === this.rootPanelComponent.nativeElement
        || this.rootPanelComponent.nativeElement.contains(event.target)
      )) {
        this.destroyItself();
      }
    });
  }

  public ngOnDestroy(): void {
    document.documentElement.style.removeProperty(`overflow-x`);
  }

  public destroyItself(): void {
    this.componentInjectorService.removeComponentFromBody(this.itself);
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
    else if (!isNaN(focusNextIndex)) {
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
    else if (!isNaN(focusPreviousIndex)) {
      this.currentFocusedElement = arrayResultEntryElements[focusPreviousIndex];
      this.currentFocusedElement.nativeElement.focus();
    } else {
      this.focusSearchInput();
    }
  }

  public buildTreeIdEntriesFromPaletteEntry(paletteEntry: PaletteEntry, entriesToVerify: PaletteEntry[]): any {
    let result;
    let foundEqual: boolean = false;

    const verifyEqual = (entryToVerify: PaletteEntry) => {
      result.push({id: entryToVerify.id, label: entryToVerify.label});
      foundEqual = _.isEqual(entryToVerify, paletteEntry);
    };

    const verifyChildren = (entryToVerify: PaletteEntry) => {
      verifyEqual(entryToVerify);
      if (!foundEqual) {
        if (this.hasChildEntries(entryToVerify)) {
          //@ts-ignore
          for (const child of entryToVerify.entries) {
            if (!foundEqual) {
              verifyChildren(child);
            } else {
              break;
            }
          }
        } else {
          result = result.slice(0, 1);
        }
      }
    };

    for (const entry of entriesToVerify) {
      if (!foundEqual) {
        result = []; // toda vez que itera sobre um novo item do array base zera a árvore de results
        verifyChildren(entry);
      } else {
        break;
      }
    }
    return result;
  }

  public rebuildCurrentEntriesFromTree(treeEntryIndex: number, sliceTree: boolean = true): void {
    let resultEntries = [...this.paletteEntries];
    if (this.searchIdTree.length > 0) {
      const slicedTreeEntries = this.searchIdTree.slice(0, treeEntryIndex);
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < slicedTreeEntries.length; i++) {
        const treeEntry = slicedTreeEntries[i];
        let paletteEntry;
        if (i === 0) {
          paletteEntry = resultEntries.find(entry => entry.id === treeEntry.id);
        } else {
          //@ts-ignore
          paletteEntry = resultEntries[0].entries.find(entry => entry.id === treeEntry.id);
        }
        resultEntries = [paletteEntry];
      }
    }
    if (sliceTree) {
      this.searchIdTree = this.searchIdTree.slice(0, treeEntryIndex);
    }
    this.searchPaletteEntries = resultEntries;
    this.currentPaletteEntries = resultEntries;
  }

  public searchAction(searchValue: any): void {
    searchValue = `${searchValue}`.toLowerCase(); // força string
    let idTreeArray: string[] = [];

    const isSearchValueInEntry: (paletteEntry: PaletteEntry) => boolean = (paletteEntry: PaletteEntry) => {
      const label = !!paletteEntry?.label ? `${paletteEntry.label}`.toLowerCase() : '';
      const id = !!paletteEntry?.id ? `${paletteEntry.id}`.toLowerCase() : '';
      return label.includes(searchValue)
        || id.includes(searchValue);
    };

    const entryToFlat: (paletteEntry: PaletteEntry, idPrefix: string, parentIds: string[]) => void = (paletteEntry: PaletteEntry, idPrefix: string = '', parentIds: string[] = []) => {
      idPrefix = !!idPrefix ? `${idPrefix}` : `${paletteEntry.id}`;
      if (this.hasChildEntries(paletteEntry)) {
        //@ts-ignore
        for (let i = 0; i < paletteEntry.entries.length; i++) {
          //@ts-ignore
          const entry = paletteEntry.entries[i];
          const idSuffix = `.entries[${i}]`;
          const currentEntryId = `${idPrefix}${idSuffix}`;
          if (isSearchValueInEntry(paletteEntry)) {
            idTreeArray.push(idPrefix);
          }
          entryToFlat(entry, currentEntryId, parentIds);
        }
      } else {
        if (isSearchValueInEntry(paletteEntry)) {
          parentIds.push(idPrefix);
          idTreeArray = [...idTreeArray, ...parentIds];
        }
      }
    };

    const entriesToFlat: (paletteEntries: PaletteEntry[]) => string[] = (paletteEntries: PaletteEntry[]) => {
      if (paletteEntries.length > 0 && paletteEntries[0].id === 'results') {
        //@ts-ignore
        paletteEntries = paletteEntries[0].entries;
      }
      const resultEntry: PaletteEntry = {
        label: 'Results',
        id: 'results',
        entries: paletteEntries
      };

      entryToFlat(resultEntry, '', []);
      // if (this.searchIdTree.length === 0) {
      //   return idTreeArray.slice(0);
      // } else {
      // }
      return idTreeArray;
    };

    const flatEntriesToEntries: (flatEntries: string[], entriesToCheck: PaletteEntry[]) => PaletteEntry[] = (flatEntries: string[], entriesToCheck: PaletteEntry[]) => {
      const resultObjToCheck = {results: {entries: [...entriesToCheck]}};
      const entries: PaletteEntry[] = [];
      for (const flatEntry of flatEntries) {
        const entryToAdd: PaletteEntry = _.get(resultObjToCheck, flatEntry);
        entryToAdd.treeId = flatEntry;
        entries.push(entryToAdd);
      }
      return _.uniqWith(entries, _.isEqual); // remove objetos iguais
    };

    const doSearch = () => {
      let entries: PaletteEntry[];
      if (this.searchIdTree.length > 0) { // caso tenha entrado em alguma subcategoria, não busca por ela mesma
        entries = this.currentPaletteEntries[0].entries;
      } else {
        entries = this.currentPaletteEntries;
      }
      this.rebuildCurrentEntriesFromTree(this.searchIdTree.length, false);
      this.searchPaletteEntries = [
        {
          label: 'Results',
          id: 'results',
          entries: flatEntriesToEntries(
            entriesToFlat(entries),
            entries
          )
        }
      ];
    }

    if (!!searchValue) {
      this.deleteLatestSearchEntryOnDelete = false;
      doSearch();
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
        this.rebuildCurrentEntriesFromTree(this.searchIdTree.length - 1);
        this.focusSearchInput();
      }
    } else {
      this.focusSearchInput();
    }
  }

  public hasChildEntries(paletteEntry: PaletteEntry): boolean {
    //@ts-ignore
    return paletteEntry?.entries && paletteEntry.entries.length > 0;
  }

  /**
   * Com uma palette entry, cria toda a estrutura baseado na raiz e abre o dialog nela já
   * @param paletteEntry: Entrada da lista raiz
   */
  public initFromPaletteEntry(paletteEntry: PaletteEntry): void {
    this.searchIdTree = this.buildTreeIdEntriesFromPaletteEntry(paletteEntry, this.paletteEntries);
    this.rebuildCurrentEntriesFromTree(this.searchIdTree.length, false);
    this.searchString = '';
    this.focusSearchInput();
  }

  /**
   * caso tenha child entries, atualiza o dialog, senão executa a ação da entry.
   */
  public paletteEntryAction(paletteEntry: PaletteEntry): void {
    if (this.hasChildEntries(paletteEntry)) {
      this.initFromPaletteEntry(paletteEntry);
    } else {
      //@ts-ignore
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
