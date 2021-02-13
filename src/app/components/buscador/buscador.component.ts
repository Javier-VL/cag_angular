import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Reimpresion, ReimpresionesService} from '../../services/reimpresiones.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  reimpresiones:any[] = []
  termino:string ="";


  constructor(private _activatedRoute:ActivatedRoute,
              private _reimpresionesService:ReimpresionesService,) { }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe(params =>{
      this.termino = params['termino'];

      this.reimpresiones = this._reimpresionesService.buscarReimpresion(params['termino']);

      console.log(this.reimpresiones);
    })
  }

}
