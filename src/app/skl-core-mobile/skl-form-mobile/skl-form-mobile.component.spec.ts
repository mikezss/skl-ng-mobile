import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SklFormMobileComponent } from './skl-form-mobile.component';

describe('SklFormMobileComponent', () => {
  let component: SklFormMobileComponent;
  let fixture: ComponentFixture<SklFormMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SklFormMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SklFormMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
