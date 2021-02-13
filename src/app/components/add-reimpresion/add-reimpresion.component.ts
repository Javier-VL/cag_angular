import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ReimpresionModel } from 'src/app/models/reimpresion.model';
import { ReimpresionesFBService } from 'src/app/services/reimpresiones-fb.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-reimpresion',
  templateUrl: './add-reimpresion.component.html',
  styles: [
  ]
})
export class AddReimpresionComponent implements OnInit {


  reimpresionSolicitud = new ReimpresionModel();

  constructor(private _reimpresionFireService: ReimpresionesFBService,) { }

  ngOnInit(): void {
  }

  guardarReimpresion(form: NgForm){

    if(form.invalid){
      console.log("formulario invalido");
      return;

    }

    Swal.fire({
      title: 'Espere...',
      text: 'Guardando Información',


      allowOutsideClick:false,
    });
    Swal.showLoading();

    let peticion: Observable<any>;


    //Validar si es actualizacion o creacion
    if(this.reimpresionSolicitud.id){//si existe crea
      peticion= this._reimpresionFireService.editarReimpresion(this.reimpresionSolicitud);


    }else{//si no existe crea
      peticion= this._reimpresionFireService.crearReimpresion(this.reimpresionSolicitud);

    }

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.reimpresionSolicitud.nombre,
        text:"Se Actualizó correctamente",

      });
    });


  }




}
