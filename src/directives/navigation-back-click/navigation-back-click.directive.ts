import {Directive, HostListener} from '@angular/core';
import {Location} from '@angular/common';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[navigationBackButton]'
})
export class NavigationBackClickDirective {
    constructor(
      private location: Location
    ) {
    }

    @HostListener('click')
    onClick(): void {
        this.location.back();
    }
}
