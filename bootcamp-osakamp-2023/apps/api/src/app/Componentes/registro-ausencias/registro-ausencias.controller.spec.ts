import { Test, TestingModule } from '@nestjs/testing';
import { RegistroAusenciasController } from './registro-ausencias.controller';

describe('RegistroAusenciasController', () => {
  let controller: RegistroAusenciasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistroAusenciasController],
    }).compile();

    controller = module.get<RegistroAusenciasController>(
      RegistroAusenciasController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
