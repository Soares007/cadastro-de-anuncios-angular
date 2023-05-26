import { TestBed } from '@angular/core/testing';

import { TransmitirDadosService } from './transmitir-dados.service';

describe('TransmitirDadosService', () => {
  let service: TransmitirDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransmitirDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
