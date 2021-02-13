import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReimpresionModel } from '../models/reimpresion.model';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReimpresionesFBService {

  private url_fb_remp = "https://cag-crud-default-rtdb.firebaseio.com";


  constructor(private http: HttpClient) {}



    //Insercion
    crearReimpresion(reimpresion:ReimpresionModel){


      return this.http.post(`${this.url_fb_remp}/reimpresiones.json`,reimpresion).pipe(
        map((resp:any) =>{
          reimpresion.id = resp.name;

          return reimpresion;
        })
      )
    }

    //Edició

    editarReimpresion(reimpresion:ReimpresionModel){

      const reimpresionTemp ={
        ...reimpresion//operador spread que agrega todas las propiedas, rompiendo la referencia de js
      };

      //delete reimpresionTemp.id;

      console.log("edicion: ", reimpresion);  

      return this.http.put(`${this.url_fb_remp}/reimpresiones/${reimpresion.id}.json`,reimpresion);
      

    }

    //Obtener Listado

    getReimpresion(){
      return this.http.get(`${this.url_fb_remp}/reimpresiones.json`).pipe( map( resp => this.crearArregloRFB(resp)));
    }

    getReimpresionByID(id:String){
      return this.http.get( `${ this.url_fb_remp}/reimpresiones/${id}.json` );

    }

    deleteReimpresion(id: String){
      return this.http.delete( `${ this.url_fb_remp}/reimpresiones/${id}.json` );

    }


    //Metodos

    private crearArregloRFB(reimpresionsfbObj: any){

      const reimpresionesfb: ReimpresionModel[] = [];


      if(reimpresionsfbObj == null){
        return []; //en caso de estar vacio que retorne vacio :v
      }

      Object.keys(reimpresionsfbObj).forEach(key => {
        const reimpresion: ReimpresionModel = reimpresionsfbObj[key];
        reimpresion.id = key;

        reimpresionesfb.push(reimpresion);

      });

      return reimpresionesfb;

    }




}
