import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

import { Reimpresion, ReimpresionesService } from '../../../services/reimpresiones.service';
import { logging } from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ],

})
export class NavbarComponent implements OnInit {



  reimpresion: any[] = [];

  constructor(private _reimpresionesService: ReimpresionesService,
    private _router: Router,
    public auth: AuthService) {}

  loginWithRedirect(){
    this.auth.loginWithRedirect();
  }

  logout(){
    this.auth.logout();
  }

  ngOnInit(): void {


  }

  buscarReimpresion(terminocaja: string) {
    console.log("TEXTO EN EL BUSCADOR", terminocaja);

    if (terminocaja.length > 0) {
      this._router.navigate(['/buscador', terminocaja]);
    } else {
      this._router.navigate(['reimpresion']);
    }


  }

}
