import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasEditarComponent } from './personas-editar.component';

describe('PersonasEditarComponent', () => {
  let component: PersonasEditarComponent;
  let fixture: ComponentFixture<PersonasEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonasEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
