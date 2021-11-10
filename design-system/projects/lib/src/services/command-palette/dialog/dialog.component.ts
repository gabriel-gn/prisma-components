import {Component, ElementRef, AfterViewInit, ViewChild, HostListener, Renderer2} from '@angular/core';
import {ComponentInjectorService} from '../component-injector.service';

@Component({
  selector: 'pm-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements AfterViewInit {

  @ViewChild('rootPanel', {static: true}) rootPanelComponent: ElementRef;
  public itself: any;
  private unlistener: () => void;

  constructor(
    private componentInjectorService: ComponentInjectorService,
    private renderer2: Renderer2
  ) {
  }

  public ngAfterViewInit(): void {
    this.rootPanelComponent.nativeElement.focus();
    this.unlistener = this.renderer2.listen('window', 'focusin', event => {
      if (!(
        event.target === this.rootPanelComponent.nativeElement
        || this.rootPanelComponent.nativeElement.contains(event.target)
      )) {
        this.componentInjectorService.removeComponentFromBody(this.itself);
      }
    });
  }

}
