import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegistroAusencias, RegistroAusenciasDocument } from './Registro-Ausencias.schema';

@Injectable()
export class RegistroAusenciasService {
    constructor(
        @InjectModel(RegistroAusencias.name) private registroModel: Model<RegistroAusenciasDocument>
    ){}

    async getUnRegistro(userId:number,date:any):Promise<any>{
        
        console.log(date)
        return await this.registroModel.find({userId:userId,date:date})
    }
    async getelmes(userId:number,date:any):Promise<any>{
        
        console.log(date)
        return await this.registroModel.find({userId:userId,mes:date})
    }
    async getelyear(userId:number,date:any):Promise<any>{
        
        console.log(date)
        return await this.registroModel.find({userId:userId,year:date})
    }

    async postuno(body:any){
        const data = await this.registroModel.find()
        body.registroId = data.length+1;
        return await this.registroModel.create(body)
    }

}
