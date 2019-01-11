import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypersonalComponent } from './mypersonal.component';

describe('MypersonalComponent', () => {
  let component: MypersonalComponent;
  let fixture: ComponentFixture<MypersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
