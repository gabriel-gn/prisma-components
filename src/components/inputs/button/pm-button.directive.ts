import {Directive, ElementRef, HostBinding, Input, OnInit} from '@angular/core';
import {MainColors} from "../../../models/colors";

@Directive({
  selector: 'button[mat-stroked-button][pm-button]',
  standalone: true,
})
export class PmButtonDirective implements OnInit {

  /**
   * Cor do botão que será exibido.
   * Utilizar as propriedades do tipo "MainColors"
   */
  private _type: MainColors | string = `${MainColors.default}`
  @Input('type') set type(value: MainColors | string) {
    this._type = value;
    this.refreshClass();
  };
  /**
   * Exibe botão de "carregamento" e desabilita o botão.
   * Para alterar o texto, utilizar a propriedade `busyText`
   */
  private _busy: boolean = true;
  @Input('busy') set busy(value: boolean) {
    this._busy = value;
    if (this._busy) {
      this.elementRef.nativeElement.insertAdjacentHTML(
        'afterbegin',
        '<span class="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>'
      );
    } else {
      // remove loading icon se tiver;
      this.elementRef.nativeElement.removeChild(this.elementRef.nativeElement.getElementsByTagName('span')[0])
    }
  };
  /**
   * Texto exibido junto ao botão de "carregando" quando a propriedade `busy` está como `true`
   */
  @Input('busyText') busyText: string;
  /**
   * Caso tenha ícone, indica se o ícone estará no começo ou fim do botão
   */
  @Input('iconPosition') iconPosition: 'start' | 'end' = 'start';
  /**
   * Se o botão será cheio ou apenas contornado pela borda
   */
  @Input('outline') outline: boolean = false;
  /**
   * Tamanho do botão
   */
  private _size: 'sm' | 'md' = 'md'
  @Input('size') set size(value: 'sm' | 'md'){
    this._size = value;
    this.refreshClass();
  };
  /**
   * Faz ou não o botão preencher a largura do container. (classe w-100)
   */
  private _fillWidth: boolean = false;
  @Input('fillWidth') set fillWidth(value: boolean) {
    this._fillWidth = value;
    this.refreshClass();
  };
  /**
   * Alinha o conteúdo do botão
   */
  private _justifyContent: 'start' | 'center' = 'start';
  @Input('justifyContent') set justifyContent(value: 'start' | 'center') {
    this._justifyContent = value;
    this.refreshClass();
  };

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.refreshClass();
  }

  private getButtonClass(): string {
    return `
    d-flex
    align-items-center
    justify-content-${this._justifyContent}
    text-overflow
    overflow-hidden
    btn
    btn-${this._type}
    ${this._size}
    ${this._fillWidth ? 'w-100' : ''}
  `;
  }

  private refreshClass(): void {
    let css = `

    `;
    this.elementRef.nativeElement.setAttribute("style", css);
    this.elementRef.nativeElement.className = this.getButtonClass();
  }

}
