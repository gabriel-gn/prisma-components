import {InjectionToken} from '@angular/core';

export interface CommandPaletteConfig {
  theme?: string;
}

export const commandPaletteConfig: CommandPaletteConfig = {
  theme: 'sla'
};

export const COMMAND_PALETTE_CONFIG = new InjectionToken<CommandPaletteConfig>('commandPaletteConfig');
