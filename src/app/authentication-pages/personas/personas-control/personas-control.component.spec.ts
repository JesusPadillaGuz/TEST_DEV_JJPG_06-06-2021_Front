import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasControlComponent } from './personas-control.component';

describe('PersonasControlComponent', () => {
  let component: PersonasControlComponent;
  let fixture: ComponentFixture<PersonasControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonasControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
