export class ReimpresionModel{
  id: string;
  nombre: string;
  fecha_solicitud: string;
  fecha_examen: string;
  estado_pago: boolean;
  estado_reimpresion: string;

  constructor(){
    this.id ="";
    this.estado_pago = false;
    this.nombre ="";
    this.fecha_solicitud ="";
    this.fecha_examen="";
    this.estado_reimpresion="";
  }
}
