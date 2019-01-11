import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SklCarouselslideMobileComponent } from './skl-carouselslide-mobile.component';

describe('SklCarouselslideMobileComponent', () => {
  let component: SklCarouselslideMobileComponent;
  let fixture: ComponentFixture<SklCarouselslideMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SklCarouselslideMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SklCarouselslideMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
