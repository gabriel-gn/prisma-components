import {AfterViewInit, Component, Input} from '@angular/core';
import {CommandPaletteService} from '../command-palette.service';

@Component({
  selector: 'pm-palette-trigger-button',
  templateUrl: './trigger-button.component.html',
  styles: [``]
})
export class TriggerButtonComponent implements AfterViewInit {

  @Input() label = '⌘ + K / ctrl + K';
  @Input() iconClass = '';

  constructor(
    public commandPaletteService: CommandPaletteService
  ) {
  }

  public ngAfterViewInit(): void {
    if (!this.label && !this.iconClass) {
      this.label = this.commandPaletteService.configs.hotkeys.join(' / ')
        .split('meta').join('⌘')
        .split('+').join(' + ');
    }
  }

}
