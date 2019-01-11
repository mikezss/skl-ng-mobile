import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SklStepMobileComponent } from './skl-step-mobile.component';

describe('SklStepMobileComponent', () => {
  let component: SklStepMobileComponent;
  let fixture: ComponentFixture<SklStepMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SklStepMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SklStepMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
