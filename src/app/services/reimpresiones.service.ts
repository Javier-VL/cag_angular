import { Injectable } from '@angular/core';

@Injectable()
export class ReimpresionesService {


  private reimpresiones: Reimpresion[] = [
    {
      nombre: "Gustavo Macias",
      fecha_solicitud: "01/01/2021",
      //img: "assets/img/aquaman.png",
      fecha_examen: "01/01/2020",
      estado_pago: "Sin Pagar",
      estado_reimpresion: "Solicitada"
    },
    {
      nombre: "Javier Velazquez",
      fecha_solicitud: "12/05/2021",
      //img: "assets/img/aquaman.png",
      fecha_examen: "12/2/2020",
      estado_pago: "Pagada",
      estado_reimpresion: "REIMPRESA"
    },
    {
      nombre: "Ivan Lozano",
      fecha_solicitud: "12/12/2021",
      //img: "assets/img/aquaman.png",
      fecha_examen: "12/12/2020",
      estado_pago: "Pagada",
      estado_reimpresion: "Entregada"
    },
    {
      nombre: "Fernanda Rivera",
      fecha_solicitud: "12/12/2021",
      //img: "assets/img/aquaman.png",
      fecha_examen: "12/12/2020",
      estado_pago: "Sin pagar",
      estado_reimpresion: "Solicitada"
    },
    {
      nombre: "Chalino Hernandez",
      fecha_solicitud: "12/12/2021",
      //img: "assets/img/aquaman.png",
      fecha_examen: "12/12/2020",
      estado_pago: "Sin pagar",
      estado_reimpresion: "Reimpresa"
    },
    {
      nombre: "Prueba alpha",
      fecha_solicitud: "12/12/2021",
      //img: "assets/img/aquaman.png",
      fecha_examen: "12/12/2020",
      estado_pago: "Pagada",
      estado_reimpresion: "Entregada"
    },
    {
      nombre: "Prueba beta  ",
      fecha_solicitud: "12/12/2021",
      //img: "assets/img/aquaman.png",
      fecha_examen: "12/12/2020",
      estado_pago: "Pagada",
      estado_reimpresion: "Entregada"
    }
  ];


  constructor() {
    console.log("Servicio de Reimpresiones listo");

  }

  getReimpresiones() {
    return this.reimpresiones;
  }

  getReimpresion(idx: number) {
    return this.reimpresiones[idx];
  }

  buscarReimpresion(termino: string):Reimpresion[] {
    let reimpresionesArray: Reimpresion[] = [];

    termino = termino.toLowerCase();

    for (let reimpresion of this.reimpresiones) {
      let nombre = reimpresion.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {

        reimpresionesArray.push(reimpresion);
      }
    }

    return reimpresionesArray;

  }

}

//Interface

export interface Reimpresion {
  nombre: string,
  fecha_solicitud: string,
  fecha_examen: string,
  estado_pago: string,
  estado_reimpresion: string
}
