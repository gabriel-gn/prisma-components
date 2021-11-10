import {Component, ElementRef, AfterViewInit, ViewChild} from '@angular/core';
import {ComponentInjectorService} from '../component-injector.service';

@Component({
  selector: 'pm-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements AfterViewInit {

  @ViewChild('rootPanel', {static: true}) rootPanelComponent: ElementRef;
  public itself: any;

  constructor(
    private componentInjectorService: ComponentInjectorService
  ) {
  }

  public ngAfterViewInit(): void {
    this.rootPanelComponent.nativeElement.focus();
  }

  public onBlur(): void {
    this.componentInjectorService.removeComponentFromBody(this.itself);
  }

}
