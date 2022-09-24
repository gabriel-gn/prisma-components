import {Directive, HostListener, Output, EventEmitter} from '@angular/core';

// ref: https://stackoverflow.com/a/43629814/13335507

// tslint:disable-next-line:directive-selector
@Directive({selector: '[longPress]'})
export class LongPressDirective {

    @Output()
    longPress = new EventEmitter();

    private _timeout: any;
    private _isLong: boolean = true;

    @HostListener('touchstart')
    @HostListener('mousedown')
    onMouseDown(e: Event): void {
        this._timeout = setTimeout(() => {
            if (this._isLong) {
                this.longPress.emit(e);
            }
        }, 500);
    }

    @HostListener('touchmove')
    onTouchScroll(e): void {
        this._isLong = false;
    }

    @HostListener('touchend')
    @HostListener('mouseup')
    @HostListener('mouseleave')
    onMouseUp(): void {
        this._isLong = true;
        clearTimeout(this._timeout);
    }

}
