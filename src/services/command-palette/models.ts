import {Observable} from 'rxjs';

export interface PaletteEntry {
  label: string;
  id: string;
  treeId?: string; // totalmente opcional
  entries?: PaletteEntry[]; // deve obrigatoriamente ter APENAS ou 'entries' ou 'action'
  action?: () => void | Observable<any>; // TODO incluir comportamento com observable
}

export interface PaletteTreeEntry {
  label: string;
  id: string;
}
