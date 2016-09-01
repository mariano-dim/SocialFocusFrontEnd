import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Response } from '@angular/http';
import { Usuario } from '../models/usuario';
import { UsuarioService} from '../services/usuario.service';

@Component({
  selector: 'login',
  templateUrl: 'app/components/login.component.html'
})
export class LoginComponent    {

  usuario: Usuario[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  // constructor(private uuarioService : UsuarioService){ }

    validarUsuario(){
        alert(`saved!!! ${JSON.stringify(this.usuario)}`);
    }





}