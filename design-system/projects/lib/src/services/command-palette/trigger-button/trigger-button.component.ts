import {AfterViewInit, Component, Input} from '@angular/core';
import {CommandPaletteService} from '../command-palette.service';
import {CommandPaletteEntriesService} from '../command-palette-entries.service';

@Component({
  selector: 'pm-palette-trigger-button',
  templateUrl: './trigger-button.component.html',
  styles: [``]
})
export class TriggerButtonComponent implements AfterViewInit {

  @Input() label = '⌘ + K / ctrl + K';
  @Input() iconClass = '';

  constructor(
    public commandPaletteService: CommandPaletteService,
    public commandPaletteEntriesService: CommandPaletteEntriesService
  ) {
    this.commandPaletteEntriesService.paletteEntries = [
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
                label: 'Light Themes',
                id: 'lightThemes',
                entries: [
                  {
                    label: 'Light',
                    id: 'light',
                    action: () => {
                      console.log('LIGHT THEME');
                    }
                  },
                  {
                    label: 'Light Alternative',
                    id: 'lightAlt',
                    action: () => {
                      console.log('LIGHT THEME ALTERNATIVE');
                    }
                  },
                ]
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
  }

  public ngAfterViewInit(): void {
    if (!this.label && !this.iconClass) {
      this.label = this.commandPaletteService.configs.hotkeys.join(' / ')
        .split('meta').join('⌘')
        .split('+').join(' + ');
    }
  }

}
