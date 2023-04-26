import { Test, TestingModule } from '@nestjs/testing';
import { RegistroAusenciasService } from './registro-ausencias.service';

describe('RegistroAusenciasService', () => {
  let service: RegistroAusenciasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistroAusenciasService],
    }).compile();

    service = module.get<RegistroAusenciasService>(RegistroAusenciasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
