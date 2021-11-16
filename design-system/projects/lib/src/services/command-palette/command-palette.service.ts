import {
  Inject,
  Injectable,
} from '@angular/core';
import {COMMAND_PALETTE_CONFIG, CommandPaletteConfig} from './injection';
import {DialogComponent} from './dialog/dialog.component';
import {ComponentInjectorService} from './component-injector.service';
import {Hotkey, HotkeysService} from 'angular2-hotkeys';
import {CommandPaletteEntriesService} from './command-palette-entries.service';

@Injectable()
export class CommandPaletteService {
  private _configs: CommandPaletteConfig;

  constructor(
    @Inject(COMMAND_PALETTE_CONFIG) initialConfig: CommandPaletteConfig,
    public commandPaletteEntriesService: CommandPaletteEntriesService,
    private componentInjectorService: ComponentInjectorService,
    private hotkeysService: HotkeysService,
  ) {
    this._configs = initialConfig;
    this.commandPaletteEntriesService.paletteEntries = this._configs.paletteEntries;
    this.hotkeysService.add(new Hotkey(this._configs.hotkeys, (event: KeyboardEvent, combo: string): boolean => {
      event.stopPropagation();
      event.preventDefault();
      this.triggerDialog();
      return true;
    }));
  }

  public get configs(): CommandPaletteConfig {
    return this._configs;
  }

  public triggerDialog(): void {
    this.componentInjectorService.appendComponentToBody(DialogComponent).then(
      (createdComponent) => {
        createdComponent.instance.itself = createdComponent;
      }
    );
  }
}
