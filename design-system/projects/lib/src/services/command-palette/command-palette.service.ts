import {
  Inject,
  Injectable,
} from '@angular/core';
import {COMMAND_PALETTE_CONFIG, CommandPaletteConfig} from './injection';
import {DialogComponent} from './dialog/dialog.component';
import {ComponentInjectorService} from './component-injector.service';

@Injectable()
export class CommandPaletteService {
  private configs: CommandPaletteConfig;

  constructor(
    @Inject(COMMAND_PALETTE_CONFIG) initialConfig: CommandPaletteConfig,
    private componentInjectorService: ComponentInjectorService
  ) {
    this.configs = initialConfig;
  }

  public triggerDialog(): void {
    this.componentInjectorService.appendComponentToBody(DialogComponent).then(
      (createdComponent) => {
        console.log('palette opened');
        createdComponent.instance.itself = createdComponent;
      }
    );
  }
}
