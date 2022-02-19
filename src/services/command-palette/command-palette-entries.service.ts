import { Injectable } from '@angular/core';
import {PaletteEntry} from './models';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class CommandPaletteEntriesService {

  public dialogSearchPlaceholder = '...';
  public dialogClearButtonLabel = 'CLEAR';

  private _paletteEntries: PaletteEntry[] = [];
  private paletteEntries$$: BehaviorSubject<PaletteEntry[]> = new BehaviorSubject<PaletteEntry[]>(this._paletteEntries);
  public readonly paletteEntries$: Observable<PaletteEntry[]> = this.paletteEntries$$.asObservable();

  constructor() { }

  public get paletteEntries(): PaletteEntry[] {
    return this._paletteEntries;
  }

  public set paletteEntries(paletteEntries: PaletteEntry[]) {
    this._paletteEntries = paletteEntries;
    this.paletteEntries$$.next(this._paletteEntries);
  }
}
