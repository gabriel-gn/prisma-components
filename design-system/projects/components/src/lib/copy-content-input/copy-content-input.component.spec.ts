import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyContentInputComponent } from './copy-content-input.component';

describe('CopyContentInputComponent', () => {
  let component: CopyContentInputComponent;
  let fixture: ComponentFixture<CopyContentInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyContentInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyContentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
