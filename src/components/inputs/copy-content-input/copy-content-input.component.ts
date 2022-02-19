import {Component, Input, OnInit} from '@angular/core';
import {MainColors} from '../../../models/colors';
import {Sizes} from '../../../models/sizes';

@Component({
  selector: 'pm-copy-content-input',
  templateUrl: './copy-content-input.component.html',
  styleUrls: ['./copy-content-input.component.scss']
})
export class CopyContentInputComponent implements OnInit {

  /**
   * texto a ser exibido como conteúdo
   */
  @Input() text = '';
  /**
   * Desabilita a interação o input.
   */
  @Input() disabled = true;
  /**
   * Executa um comando ao copiar para a área de transferência
   */
  @Input() copyCallback: (inputText: string) => void;
  /**
   * Faz o input ter altura 100%
   */
  @Input() fillHeight: boolean = false;
  /**
   * Faz o input ter altura 100%
   */
  @Input() btnColor: MainColors = MainColors.primary;
  /**
   * Raio da borda
   */
  @Input() borderRadius: Sizes = Sizes.md;


  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  public copyCallbackExecute(inputText: string): void {
    if (this.copyCallback) {
      this.copyCallback(inputText);
    }
  }

}
