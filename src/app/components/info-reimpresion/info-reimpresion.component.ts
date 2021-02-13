import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//Services
import {AuthService} from '@auth0/auth0-angular';

import { Reimpresion, ReimpresionesService } from '../../services/reimpresiones.service';
import { ReimpresionesFBService } from '../../services/reimpresiones-fb.service';
import { ReimpresionModel } from 'src/app/models/reimpresion.model';
import Swal from 'sweetalert2';
import { analyzeAndValidateNgModules } from '@angular/compiler';



@Component({
  selector: 'app-info-reimpresion',
  templateUrl: './info-reimpresion.component.html',
})
export class InfoReimpresionComponent implements OnInit {
  

  reimpresion: any = {};



  constructor(private _activatedRoute: ActivatedRoute,
    private _reimpresionesServices: ReimpresionesService,
    private _reimpresionesFBService: ReimpresionesFBService,
    public auth: AuthService ) {
    /*/Observador
    this._activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      //this.reimpresion = this._reimpresionesServices.getReimpresion(params['id']);
      this.reimpresion = this._reimpresionesFBService.getReimpresion();

    })*/

  }

  op_user: any = AuthService;

  

  ngOnInit() {
    //var id: String | null   = "1";

    const id = this._activatedRoute.snapshot.paramMap.get('id')!;



    this._reimpresionesFBService.getReimpresionByID(id).subscribe((resp:any) => {

      this.reimpresion = resp;
      this.reimpresion.id = id;
    });

  }

  loadReimpresiones(){
    this._reimpresionesFBService.getReimpresion().subscribe( resp => this.reimpresion =resp);
  }

  editarReimpresion(reimpresion:any){
    reimpresion.estado_pago = true;

    reimpresion= this._reimpresionesFBService.editarReimpresion(this.reimpresion);



    
    reimpresion.subscribe();
    Swal.fire({
      title: "Pagada",
      text:"Se Actualizó correctamente",

    });


  }

  realizarReimpresion(reimpresion:any){
    reimpresion.estado_reimpresion = "reimpresa";

    reimpresion= this._reimpresionesFBService.editarReimpresion(this.reimpresion);



    
    reimpresion.subscribe();
    Swal.fire({
      title: "Reimpresa",
      text:"Se Actualizó el estado de solicitud a reimpresa",

    });


  }

  entregarReimpresion(reimpresion: any) {

    Swal.fire({
      title: '¿Entrego está reimpresión?',
      text: ` ${reimpresion.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, entregada'
    }).then((result) => {
      if (result.isConfirmed && reimpresion.estado_pago == true) {

        Swal.fire(
          'Entregada',
          '',
          'success'
        )
        //this._reimpresionesFBService.deleteReimpresion(reimpresion.id).subscribe();
        reimpresion.estado_reimpresion = "entregada";
        reimpresion= this._reimpresionesFBService.editarReimpresion(this.reimpresion);
        reimpresion.subscribe();

      }else{
        Swal.fire(
          'Error',
          'Confirma el pago antes de entregar :)',
          'error'
        )
      }

    })

  }

}
