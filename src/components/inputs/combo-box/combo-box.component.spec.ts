import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ComboBoxComponent} from './combo-box.component';
import {ComboBoxModule} from './combo-box.module';

describe('ComboBoxComponent', () => {
  let component: ComboBoxComponent;
  let fixture: ComponentFixture<ComboBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ComboBoxModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
