import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasNuevoComponent } from './personas-nuevo.component';

describe('PersonasNuevoComponent', () => {
  let component: PersonasNuevoComponent;
  let fixture: ComponentFixture<PersonasNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonasNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
