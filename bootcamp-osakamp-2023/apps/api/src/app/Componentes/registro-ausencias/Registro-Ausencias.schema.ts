import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type RegistroAusenciasDocument = RegistroAusencias & Document;

@Schema()
export class RegistroAusencias {
  @Prop()
  userId: number;
  @Prop()
  registroId:number;
  @Prop()
  date: string;
  @Prop()
  timeIn: string;
  @Prop()
  timeOut:string;
  @Prop()
  outType:string;
  @Prop()
  place:Array<number>;
  @Prop()
  status:string;
  @Prop()
  notes:string;
  @Prop()
  mes:string;
  @Prop()
  year:string;
  @Prop()
  ausencia:string;
  @Prop()
  aceptado:string;
  @Prop()
  dateFin:string;
}

export const RegistroAusenciasSchema = SchemaFactory.createForClass(RegistroAusencias);