import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
//Servicio de reimpresiones
//Local
import { Reimpresion, ReimpresionesService } from '../../services/reimpresiones.service'
//firebase
import {ReimpresionesFBService} from '../../services/reimpresiones-fb.service'
import { ReimpresionModel } from 'src/app/models/reimpresion.model';
//
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-reimpresion',
  templateUrl: './reimpresion.component.html',

})
export class ReimpresionComponent implements OnInit {
  

  reimpresiones:ReimpresionModel[] = [];
  loading = true;

  constructor(private _reimpresionesService: ReimpresionesService,
              private _router: Router,
              private _rempresionesFBService: ReimpresionesFBService,
              public auth: AuthService , ) {//Importando servicio


  }

  ngOnInit(){
    //recuperando arreglo de objetos decladaro en el servecio obteniendolo de la funcion ya que obvi son privados
    //this.reimpresiones = this._reimpresionesService.getReimpresiones();
    this.loadReimpresiones();
    //console.log("reimpresiones cargadas");  


  }

  loadReimpresiones(){
    
    this._rempresionesFBService.getReimpresion().subscribe( resp => {
      this.reimpresiones =resp; this.loading = false    });

  }

  verReimpresion(idx:number){
    console.log(idx);


  }

}
