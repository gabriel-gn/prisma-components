import { Component } from '@angular/core';
import {CommandPaletteService} from '../command-palette.service';

@Component({
  selector: 'pm-palette-trigger-button',
  templateUrl: './trigger-button.component.html',
  styles: [``]
})
export class TriggerButtonComponent {

  constructor(
    public commandPaletteService: CommandPaletteService
  ) { }

}
