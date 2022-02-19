import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector
} from '@angular/core';

@Injectable()
export class ComponentInjectorService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) { }

  async appendComponentToBody(component: any): Promise<ComponentRef<any>> {
    return await new Promise((resolve) => {
      // create a component reference
      const componentRef = this.componentFactoryResolver
        .resolveComponentFactory(component)
        .create(this.injector);

      // attach component to the appRef so that so that it will be dirty checked.
      this.applicationRef.attachView(componentRef.hostView);

      // get DOM element from component
      const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
      resolve(componentRef);
    });
  }

  removeComponentFromBody(componentRef: ComponentRef<any>): void {
    this.applicationRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }
}
