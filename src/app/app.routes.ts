import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';


//RUTAS
import {HomeComponent} from '../app/components/home/home.component';
import {ReimpresionComponent} from '../app/components/reimpresion/reimpresion.component';
import {DefaultAnswersComponent} from '../app/components/default-answers/default-answers.component';
import {InfoReimpresionComponent} from '../app/components/info-reimpresion/info-reimpresion.component';
import {BuscadorComponent} from '../app/components/buscador/buscador.component';
import { AddReimpresionComponent } from './components/add-reimpresion/add-reimpresion.component';
import { EntregadasComponent } from './components/entregadas/entregadas.component';



const APP_ROUTES: Routes = [
  //{ path: 'routePath', component: Component },
  {path: 'home', component: HomeComponent},
  {path: 'reimpresion', component: ReimpresionComponent},
  {path: 'default-answers', component: DefaultAnswersComponent},
  {path: 'info-reimpresion/:id', component: InfoReimpresionComponent},
  {path: 'buscador/:termino', component: BuscadorComponent},
  {path: 'add-reimpresion/:id', component: AddReimpresionComponent},
  {path: 'entregadas', component: EntregadasComponent},


  //Ruta por defecto asiganada a "home" en caso de no ser encontrada
  { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(APP_ROUTES);
