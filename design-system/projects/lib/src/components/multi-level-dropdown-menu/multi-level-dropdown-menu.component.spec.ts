import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLevelDropdownMenuComponent } from './multi-level-dropdown-menu.component';

describe('MultiLevelDropdownMenuComponent', () => {
  let component: MultiLevelDropdownMenuComponent;
  let fixture: ComponentFixture<MultiLevelDropdownMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiLevelDropdownMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiLevelDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
