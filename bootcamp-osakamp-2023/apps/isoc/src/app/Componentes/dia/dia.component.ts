import { DatePipe } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Idia } from '../../Constante/dia';
import { EstadoService } from '../../Services/Estado.service';
import * as moment from 'moment'

@Component({
  selector: 'bootcamp-osakamp-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.css'],
  providers:[DatePipe]
})
export class DiaComponent {
  constructor(private estadoService:EstadoService,private datePipe:DatePipe ){}
datos?:Idia[]=
[{userId:0,
  registroId:0,
  date:"a",
  timeIn:"",
  timeOut:"",
  outType:"",
  place:[0,0],
  status:"",
  notes:"",
  total:0,
  mes:"",
  year:0,
  aceptado:"",
ausencia:"",
dateFin:"",
totalAusencia:0
}
];
datosAusencias=[{
  userId:0,
  date:"",
  dateFin:"",
  status:"",
  timeIn:"",
  timeOut:"",
  ausencia:"",
  aceptado:"",
  mes:"",
  year:"",
  totalAusencia:0
}];

HoraEntrada?:""
HoraSalida?:""
public dia?:"";
public fecha_nueva="";
sum = 0;
sumAusencia=0

  
Datos(){
  this.fecha_nueva = moment(this.dia, 'YYYY/MM/DD').format('DD/MM/YY');
  console.log(this.fecha_nueva)
return this.estadoService.unDia(this.fecha_nueva).subscribe((dato)=>{
  // this.datos=dato[dato.length-1]
  console.log(dato)
  const algo =dato.forEach((element:{timeIn:string,timeOut:string,total:number,ausencia:string,totalAusencia:number}) => {
    if(element.ausencia=="" || element.ausencia==undefined){
    if(element.timeIn!="" && element.timeOut!=""){
    const uno=element.timeIn.split(":")
    const dos=element.timeOut.split(":")
    const numero=parseInt(uno[0])*60+parseInt(uno[1])
    const numeroDos=parseInt(dos[0])*60+parseInt(dos[1])
    const total=(numeroDos-numero)/60
    element.total=total;
    element.totalAusencia=0
  }else{
    element.total=0
    element.totalAusencia=0
  }
}else{
  if(element.timeIn!="" && element.timeOut!=""){
    const unoa=element.timeIn.split(":")
    const dosa=element.timeOut.split(":")
    const numeroa=parseInt(unoa[0])*60+parseInt(unoa[1])
    const numeroDosa=parseInt(dosa[0])*60+parseInt(dosa[1])
    const totala=(numeroDosa-numeroa)/60
    element.totalAusencia=totala;
    element.total=0
  }else{
    element.total=0
    element.totalAusencia=0
  }
}
  
  });
  this.datos=dato
  this.hacerSuma()
})
}
hacerSuma(){
  if(this.datos!=undefined){
    this.sum=0;
    this.sumAusencia=0;
    const otro=this.datos.forEach(element => {
      this.sum+=element.total;
      this.sumAusencia+=element.totalAusencia
      
    });
    console.log(this.sum)
  }
  this.DatosAusencias()
}

DatosAusencias(){
  return this.estadoService.AusenciaDia(this.fecha_nueva).subscribe((dato)=>{
    console.log(dato)
    const algo =dato.forEach((element:{timeIn:string,timeOut:string,total:number,ausencia:string,totalAusencia:number}) => {
      if(element.ausencia=="" || element.ausencia==undefined){
      if(element.timeIn!="" && element.timeOut!=""){
      const uno=element.timeIn.split(":")
      const dos=element.timeOut.split(":")
      const numero=parseInt(uno[0])*60+parseInt(uno[1])
      const numeroDos=parseInt(dos[0])*60+parseInt(dos[1])
      const total=(numeroDos-numero)/60
      element.total=total;
      element.totalAusencia=0
    }else{
      element.total=0
      element.totalAusencia=0
    }
  }else{
    if(element.timeIn!="" && element.timeOut!=""){
      const unoa=element.timeIn.split(":")
      const dosa=element.timeOut.split(":")
      const numeroa=parseInt(unoa[0])*60+parseInt(unoa[1])
      const numeroDosa=parseInt(dosa[0])*60+parseInt(dosa[1])
      const totala=(numeroDosa-numeroa)/60
      element.totalAusencia=totala;
      element.total=0
    }else{
      element.total=0
      element.totalAusencia=0
    }
  }
    
    });
    this.datosAusencias=dato
    this.hacerSuma()
  })
}

}
