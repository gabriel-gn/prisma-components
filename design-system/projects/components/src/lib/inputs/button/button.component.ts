import {Component, Input} from '@angular/core';
import {MainColors} from '../../../models/colors';

@Component({
  selector: 'pm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
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

  constructor() { }

  public getClassName(): string {
    let name = 'btn';
    if (this.type) {
      if (this.outline) {
        name += ` btn-outline-${this.type}`;
      } else {
        name += ` btn-${this.type}`;
      }
    }
    return name;
  }

}
