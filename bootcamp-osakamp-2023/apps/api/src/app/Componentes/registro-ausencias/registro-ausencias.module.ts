import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistroAusenciasController } from './registro-ausencias.controller';
import { RegistroAusencias, RegistroAusenciasSchema } from './Registro-Ausencias.schema';
import { RegistroAusenciasService } from './registro-ausencias.service';

@Module({
    imports:[
        MongooseModule.forFeature([{ name: RegistroAusencias.name, schema: RegistroAusenciasSchema }]),
      ],
      controllers:[RegistroAusenciasController],
      providers: [RegistroAusenciasService]
})
export class RegistroAusenciasModule {}
