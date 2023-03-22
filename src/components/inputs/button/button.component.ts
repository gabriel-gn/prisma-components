import {Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';
import {MainColors} from '../../../models/colors';

@Component({
  selector: 'pm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @HostBinding('className') componentClass: string;
  @Input('label') label: string | null = '';  // Usada só pra aparecer no storybook
  /**
   * Cor do botão que será exibido.
   * Utilizar as propriedades do tipo "MainColors"
   */
  @Input('type') type: MainColors | string = `${MainColors.default}`;
  /**
   * Exibe botão de "carregamento" e desabilita o botão.
   * Para alterar o texto, utilizar a propriedade `busyText`
   */
  @Input('busy') busy: boolean = false;
  /**
   * Texto exibido junto ao botão de "carregando" quando a propriedade `busy` está como `true`
   */
  @Input('busyText') busyText: string;
  /**
   * Ícone que será exibido no botão junto ao texto. Ex: `uil uil-md uil-tabs`
   */
  @Input('iconClass') iconClass: string;
  /**
   * Caso tenha ícone, indica se o ícone estará no começo ou fim do botão
   */
  @Input('iconPosition') iconPosition: 'start' | 'end' = 'start';
  /**
   * Se o botão será cheio ou apenas contornado pela borda
   */
  @Input('outline') outline: boolean = false;
  /**
   * Propriedade de habilitado ou desabilitado
   */
  @Input('disabled') disabled: boolean = false;
  /**
   * Tamanho do botão
   */
  @Input('size') size: 'sm' | 'md' = 'md';
  /**
   * Faz ou não o botão preencher a largura do container. (classe w-100)
   */
  @Input('fillWidth') fillWidth: boolean = false;

  constructor() {
    this.componentClass = 'pm-button';
  }

  public getClassName(): string {
    let name = 'text-overflow overflow-hidden btn';
    if (this.size !== 'md') {
      name += ` ${this.size}`;
    }
    if (this.fillWidth) {
      name += ' w-100';
    }
    if (this.type) {
      if (this.outline) {
        name += ` btn-outline-${this.type}`;
      } else {
        name += ` btn-${this.type}`;
      }
    }
    if (this.iconClass) {
      name += ` d-flex flex-row`;
    }
    return name;
  }

  public logEvent = (event: any) => {
    console.log(event);
  }

}
