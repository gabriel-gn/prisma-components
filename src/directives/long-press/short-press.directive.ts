import {Directive, HostListener, Output, EventEmitter} from '@angular/core';

// ref: https://stackoverflow.com/a/43629814/13335507

// tslint:disable-next-line:directive-selector
@Directive({selector: '[shortPress]'})
export class ShortPressDirective {

    @Output()
    shortPress = new EventEmitter();

    private _timeout: any;
    private _isShort: boolean;

    @HostListener('touchstart')
    @HostListener('mousedown')
    onMouseDown(e): void {
        this._isShort = true;
        this._timeout = setTimeout(() => {
            this._isShort = false;
        }, 500);
    }

    @HostListener('touchmove')
    onTouchScroll(e): void {
        this._isShort = false;
    }

    @HostListener('touchend')
    @HostListener('mouseup')
    onMouseUp(e): void {
        if (this._isShort) {
            this.shortPress.emit(e);
        }
        clearTimeout(this._timeout);
    }

    @HostListener('touchcancel')
    @HostListener('mouseleave')
    onMouseLeave(): void {
        clearTimeout(this._timeout);
    }
}
