import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymessageComponent } from './mymessage.component';

describe('MymessageComponent', () => {
  let component: MymessageComponent;
  let fixture: ComponentFixture<MymessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
