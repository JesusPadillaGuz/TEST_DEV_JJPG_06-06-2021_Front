import { TestBed } from '@angular/core/testing';

import { PersonaFisicaService } from './persona-fisica.service';

describe('PersonaFisicaService', () => {
  let service: PersonaFisicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaFisicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
