import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SklGridMobileComponent } from './skl-grid-mobile.component';

describe('SklGridMobileComponent', () => {
  let component: SklGridMobileComponent;
  let fixture: ComponentFixture<SklGridMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SklGridMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SklGridMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
