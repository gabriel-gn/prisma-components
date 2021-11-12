import {Component, ElementRef, AfterViewInit, ViewChild, HostListener, Renderer2, OnDestroy} from '@angular/core';
import {ComponentInjectorService} from '../component-injector.service';
import {Observable} from 'rxjs';

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
  public searchString = '';
  public placeholderString = 'Digite sua busca...';
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
    setTimeout(() => {
      this.rootPanelComponent.nativeElement.children[0].focus();
    }, 50);
    this.unlistener = this.renderer2.listen('window', 'focusin', event => {
      if (!(
        event.target === this.rootPanelComponent.nativeElement
        || this.rootPanelComponent.nativeElement.contains(event.target)
      )) {
        this.destroyItself();
      }
    });
  }

  public destroyItself(): void {
    this.componentInjectorService.removeComponentFromBody(this.itself);
  }

  public ngOnDestroy(): void {
    document.documentElement.style.removeProperty(`overflow-x`);
  }

  public searchAction(searchValue: string): void {
    console.log(searchValue);
    const currentEntriesToFlat: (paletteEntries: PaletteEntry[]) => string[] = (paletteEntries: PaletteEntry[]) => {
      return ['preferences.theme.light'];
    };

    const flatEntriesToEntries: (flatEntries: string[]) => PaletteEntry[] = (flatEntries: string[]) => {
      return [
        {
          label: 'Preferences > Change Theme',
          id: 'preferences.theme',
          entries: [
            {
              label: 'Light',
              id: 'light',
              action: () => {
                console.log('LIGHT THEME');
              }
            },
          ]
        }
      ];
    };

    if (!!searchValue) {
      this.currentPaletteEntries = [...flatEntriesToEntries(currentEntriesToFlat(this.currentPaletteEntries))];
    } else {
      this.currentPaletteEntries = [...this.paletteEntries];
    }
  }

  public hasChildEntries(paletteEntry: PaletteEntry): boolean {
    return paletteEntry?.entries && paletteEntry.entries.length > 0;
  }

  /**
   * caso tenha child entries, atualiza o dialog, senão executa a ação da entry.
   * @param paletteEntry
   */
  public paletteEntryAction(paletteEntry: PaletteEntry): void {
    if (this.hasChildEntries(paletteEntry)) {
      console.log(paletteEntry);
      this.currentPaletteEntries = [paletteEntry];
      this.searchString += `${paletteEntry.id} > `;
    } else {
      paletteEntry.action();
    }
  }

}
