import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildreneducationComponent } from './childreneducation.component';

describe('ChildreneducationComponent', () => {
  let component: ChildreneducationComponent;
  let fixture: ComponentFixture<ChildreneducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildreneducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildreneducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
