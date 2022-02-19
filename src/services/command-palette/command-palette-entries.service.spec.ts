import { TestBed } from '@angular/core/testing';

import { CommandPaletteEntriesService } from './command-palette-entries.service';

describe('CommandPaletteEntriesService', () => {
  let service: CommandPaletteEntriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandPaletteEntriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
