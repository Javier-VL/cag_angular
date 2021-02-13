import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

//Pipes
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);

//Servicios
import { ReimpresionesService } from '../app/services/reimpresiones.service';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
//Auth0
import {AuthModule} from '@auth0/auth0-angular';

//Rutas
import { APPROUTING } from '../app/app.routes';

//Componentes "se generan automaticamente con ng g c"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ReimpresionComponent } from './components/reimpresion/reimpresion.component';
import { DefaultAnswersComponent } from './components/default-answers/default-answers.component';
import { from } from 'rxjs';
import { InfoReimpresionComponent } from './components/info-reimpresion/info-reimpresion.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { AddReimpresionComponent } from './components/add-reimpresion/add-reimpresion.component';
import { EntregadasComponent } from './components/entregadas/entregadas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    ReimpresionComponent,
    DefaultAnswersComponent,
    InfoReimpresionComponent,
    BuscadorComponent,
    AddReimpresionComponent,
    EntregadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    APPROUTING,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-21v5wpvp.us.auth0.com',
      clientId: 'zHMY92XE3V1bifWTCJJGBKNJGSYMsAjs',
      cacheLocation: 'localstorage',//Este atributo permite que no se pierda la autenticacion despues de hacer refresh("no muy comun en una spa")
      useRefreshTokens: true,
    }),
  ],
  providers: [//Aqui van todos los servicios

    ReimpresionesService,
    {
      provide: LOCALE_ID,
      useValue: 'es',
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
