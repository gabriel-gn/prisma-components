import {InjectionToken} from '@angular/core';
import {SpinnerComponent} from './spinner/spinner.component';
import {ComponentType} from '@angular/cdk/overlay';

export const defaultSpinner: ComponentType<any> = SpinnerComponent;

export const IF_LOADED_SPINNER: InjectionToken<ComponentType<any>> = new InjectionToken<ComponentType<any>>('IF_LOADED_SPINNER');
