import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { UsuarioCredentials } from '../models/usuarioCredentials';
import { Usuario } from '../models/usuario';
@Injectable()
export class UsuarioService {
    private baseUsuarioUrl: string = 'http://localhost:8080/api/usuario/';
    private usuario: Usuario;

    constructor(private http: Http) {
    }


    // Fetch all existing Usuarios
    getAllUsuarios(): Observable<Usuario[]> {

        console.log('in the getAllUsuarios');

        return this.http
            .get(`${this.baseUsuarioUrl}`, { headers: this.getHeaders() })
            .map((mapUsuarios))
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }



    // TODO: implementar los servicios del lado del servidor
    validateUsuario(usuarioCredentials: UsuarioCredentials): Usuario {

        console.log('in the validateUsuario');
        console.log('Email:' + usuarioCredentials.email);

        this.http.get(`${this.baseUsuarioUrl}/email/${usuarioCredentials.email}`,
            { headers: this.getHeaders() })
            .map((res: Response) => res.json())
            .subscribe(
            data => { this.usuario = data; },
            err => console.error(err),
            () => console.log('done')
            );
        console.log('Retornando desde servicio');
        return this.usuario;
    }



    // Fetch all existing Usuarios
    getByEmail(email: string): Observable<Usuario> {

        console.log('in the getByEmail');
        let usuario$ = this.http
            .get(`${this.baseUsuarioUrl}/email/${email}`, { headers: this.getHeaders() })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        return usuario$;
    }



    private getHeaders() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

}

// this could also be a private method of the component class
function handleError(error: any) {
    // log error
    // could be something more sofisticated
    let errorMsg = error.message || `Yikes! There was was a problem with our usuario.service couldn't retrieve your data!`;
    console.error(errorMsg);

    // throw an application level error
    return Observable.throw(errorMsg);
}

function mapUsuarios(response: Response): Usuario[] {
    // uncomment to simulate error:
    // throw new Error('ups! Force choke!');

    // The response of the API has a results
    // property with the actual results
    return response.json().results.map(toUsuario);
}

function toUsuario(r: any): Usuario {
    let usuario = <Usuario> ({
      id: r.id ,
      email: r.email,
      clave: r.clave,
      creationDate: r.creationDate ,
      telefono: r.telefono ,
      fechaNacimiento: r.fechaNacimiento ,
      pais: r.pais,
      provincia: r.provincia,
      ciudad: r.ciudad,
      calle: r.calle ,
    });
    console.log('Parsed usuario:', usuario);
    return usuario;
}