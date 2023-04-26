import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Action, Store } from '@ngrx/store';
import { EntradaService } from '../../Services/entrada.service';
import { Geolocalitation } from '../../Services/Geolocalitation.service';
import { DecodificacionService } from '../../Services/Decodificador.jwt';
import { EstadoService } from '../../Services/Estado.service';


@Component({
  selector: 'bootcamp-osakamp-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css'],
})
export class InformesComponent implements OnInit{
  
  constructor( private store:Store<{contador:string}>,
    private router:Router,
    private entradaService:EntradaService,
    private ubicacion:Geolocalitation,
    private decodificar:DecodificacionService,
    private estadoAnterior:EstadoService){
    this.store.subscribe(state=>{
      this.estado=state.contador
   });
  }

  estado="0";

onClickdia(){
this.router.navigate(['/informes/dia'])
}
ngOnInit(){
    
  const token=localStorage.getItem('jwt')
  if(token!==null){
    this.decodificar.decodificarToken(token)
  }  
       
    this.estadoAnterior.registrar().subscribe(data=>{ 
      console.log(data) 
      if(data.length>0) {
      if(data[data.length-1].status=="Trabajo"){
        const accion:Action = {
          type:'Input'
        }
        this.store.dispatch(accion)
      }else{
        const accion:Action = {
          type:'Output'
        }
        this.store.dispatch(accion)
      }
    
      
      this.estado=data[data.length-1].status
      console.log(data[data.length-1].registroId)
    }
    })
    
}
canExit():boolean{
    if(confirm(`Si sales ahora estas en estado de ${this.estado}`)){
      return true;
   }else{
    return false
   }
  }
}
