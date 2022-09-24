import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationBackClickDirective} from './navigation-back-click.directive';


@NgModule({
    exports: [NavigationBackClickDirective],
    declarations: [NavigationBackClickDirective],
    imports: [
        CommonModule
    ]
})
export class NavigationBackClickModule {
}
