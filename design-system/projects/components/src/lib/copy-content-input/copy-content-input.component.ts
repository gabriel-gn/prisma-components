import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pm-copy-content-input',
  templateUrl: './copy-content-input.component.html',
  styleUrls: ['./copy-content-input.component.scss']
})
export class CopyContentInputComponent implements OnInit {

  @Input() text = '';
  @Input() disabled = true;
  // public readonly notifier: SnotifyService;

  constructor(
    // private notifierService: SnotifyService
  ) {
    // this.notifier = notifierService;
  }

  ngOnInit(): void {
  }

  // /**
  //  * Notifica que o valor foi copiado para a clipboard.
  //  * O que copia mesmo é a diretiva [cdkCopyToClipboard]="texto"
  //  * @param inputElement: uma tag input
  //  */
  // copyInputMessage(inputElement) {
  //   this.notifier.info('Link copiado para a área de transferência')
  // }

}
