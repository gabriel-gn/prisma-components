import {ComponentType} from "@angular/cdk/overlay";
import {makeEnvironmentProviders} from "@angular/core";
import {IF_LOADED_SPINNER} from "./injection";

export function provideNgIfLoaded(spinnerComponent: ComponentType<any> = undefined) {
  return makeEnvironmentProviders([
    { provide: IF_LOADED_SPINNER, useValue: spinnerComponent },
  ]);
}
