import { Component } from '@angular/core';
import { Idia } from '../../Constante/dia';
import { EstadoService } from '../../Services/Estado.service';

@Component({
  selector: 'bootcamp-osakamp-mes',
  templateUrl: './mes.component.html',
  styleUrls: ['./mes.component.css'],
})
export class MesComponent {

  constructor(private obtenRegistro:EstadoService){}

  mesElegido=[
    {nombre:"Enero",valor:"Enero"},
    {nombre:"Febrero",valor:"Febrero"},
    {nombre:"Marzo",valor:"Marzo"},
    {nombre:"Abril",valor:"Abril"},
    {nombre:"Mayo",valor:"Mayo"},
    {nombre:"Junio",valor:"Junio"},
    {nombre:"Julio",valor:"Julio"},
    {nombre:"Agosto",valor:"Agosto"},
    {nombre:"Septiembre",valor:"Septiembre"},
    {nombre:"Octubre",valor:"Octubre"},
    {nombre:"Noviembre",valor:"Noviembre"},
    {nombre:"Diciembre",valor:"Diciembre"},
  ]
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
totalAusencia:0}
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
public fecha_nueva=""
mesSeleccionado="";
sum = 0;
sumAusencia=0

onValueChange() {
  console.log(this.mesSeleccionado); // Aquí puedes hacer lo que quieras con el valor seleccionado
}

traerRegistros(){
console.log(this.mesSeleccionado)

return this.obtenRegistro.traerMes(this.mesSeleccionado).subscribe((dato)=>{
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
  return this.obtenRegistro.AusenciatraerMes(this.mesSeleccionado).subscribe((dato)=>{
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
    this.hacerSumaAusencia()
  })
}
hacerSumaAusencia(){
  if(this.datos!=undefined){
    
    this.sumAusencia=0;
    const otro=this.datosAusencias.forEach(element => {
      
      this.sumAusencia+=element.totalAusencia
      
    });
    console.log(this.sum)
  }
  this.DatosAusencias()
}
}

