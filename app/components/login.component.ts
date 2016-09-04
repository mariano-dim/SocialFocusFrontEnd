import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Response } from '@angular/http';
import { UsuarioCredentials } from '../models/UsuarioCredentials';
import { UsuarioService} from '../services/usuario.service';

@Component({
  selector: 'login',
  templateUrl: 'app/components/login.component.html'
})
export class LoginComponent {

  @Input() usuarioCredentials: UsuarioCredentials;
  public errorMessage: string = '';


  constructor(private uuarioService: UsuarioService, private router: Router) {

    this.usuarioCredentials = new UsuarioCredentials('', '');
    console.log('Hola Consola');
  }

  login() {
    // alert(`saved!!! ${JSON.stringify(this.usuarioCredentials.email)}`);
    console.log('email:' + this.usuarioCredentials.email);
    console.log('clave:' + this.usuarioCredentials.clave);

    if (!this.uuarioService.validateUsuario(this.usuarioCredentials)) {
      this.errorMessage = 'Failed to login';
    } else {
      console.log('Log in satisfactorio');
      this.router.navigate(['dashboard']);
    }
  }





}