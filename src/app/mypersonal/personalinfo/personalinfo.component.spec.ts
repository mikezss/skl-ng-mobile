import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalinfoComponent } from './personalinfo.component';

describe('PersonalinfoComponent', () => {
  let component: PersonalinfoComponent;
  let fixture: ComponentFixture<PersonalinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
