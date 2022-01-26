import {
  ComponentFactoryResolver,
  Directive,
  Inject,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {IF_LOADED_SPINNER} from './injection';
import {ComponentType} from '@angular/cdk/overlay';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngIfLoaded]'
})
export class NgIfLoadedDirective {

  public spinner: ComponentType<any>;

  constructor(
    @Inject(IF_LOADED_SPINNER) spinnerComponent: ComponentType<any>,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) {
    this.spinner = spinnerComponent;
  }


  @Input()
  set ngIfLoaded(value) {
    if (value) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
      const factory = this.resolver.resolveComponentFactory(this.spinner);
      this.viewContainer.createComponent(factory);
    }
  }

}
