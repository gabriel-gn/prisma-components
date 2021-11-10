import {InjectionToken} from '@angular/core';

export interface CommandPaletteConfig {
  hotkeys: string[];
}

export const commandPaletteConfig: CommandPaletteConfig = {
  hotkeys: ['meta+k', 'ctrl+k']
};

export const COMMAND_PALETTE_CONFIG = new InjectionToken<CommandPaletteConfig>('commandPaletteConfig');
