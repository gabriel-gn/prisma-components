import {InjectionToken} from '@angular/core';
import {PaletteEntry} from './models';

export interface CommandPaletteConfig {
  hotkeys: string[];
  paletteEntries: PaletteEntry[];
}

export const commandPaletteConfig: CommandPaletteConfig = {
  hotkeys: ['meta+k', 'ctrl+k'],
  paletteEntries: []
};

export const COMMAND_PALETTE_CONFIG = new InjectionToken<CommandPaletteConfig>('commandPaletteConfig');
