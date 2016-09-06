import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioCredentials } from '../models/UsuarioCredentials';
import { Usuario} from '../models/usuario';
import { UsuarioService} from '../services/usuario.service';



@Component({
  selector: 'login',
  templateUrl: 'app/components/login.component.html'
})
export class LoginComponent {

  @Input() usuarioCredentials: UsuarioCredentials;
  usuario: Usuario;
  usuarios: Usuario[] = [];
  public errorMessage: string = '';


  constructor(private uuarioService: UsuarioService,
    private router: Router) {

    this.usuarioCredentials = new UsuarioCredentials('', '');

    console.log('Hola Consola');
  }

  login() {
    // alert(`saved!!! ${JSON.stringify(this.usuarioCredentials.email)}`);
    console.log('email:' + this.usuarioCredentials.email);
    console.log('clave:' + this.usuarioCredentials.clave);

    // this.usuario = this.uuarioService.validateUsuario(this.usuarioCredentials);
    this.uuarioService.getAllUsuarios().subscribe(
       usu => this.usuarios = usu,
       error =>  this.errorMessage = <any>error);
  }



}


