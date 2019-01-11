import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SklDrawerMobileComponent } from './skl-drawer-mobile.component';

describe('SklDrawerMobileComponent', () => {
  let component: SklDrawerMobileComponent;
  let fixture: ComponentFixture<SklDrawerMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SklDrawerMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SklDrawerMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
