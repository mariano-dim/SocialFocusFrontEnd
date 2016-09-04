import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { UsuarioCredentials } from '../models/usuarioCredentials';
import { Usuario } from '../models/usuario';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class UsuarioService {
    private baseUsuarioUrl: string = 'http://localhost:8080/api/usuario/';

    constructor(private http: Http) {
    }


    // Fetch all existing Usuarios
    getAllUsuarios(): Observable<Usuario[]> {

        console.log('in the getAllUsuarios');

        return this.http
            .get(`${this.baseUsuarioUrl}`, { headers: this.getHeaders() })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }



    // TODO: implementar los servicios del lado del servidor
    validateUsuario(usuarioCredentials: UsuarioCredentials): Observable<UsuarioCredentials> {

        console.log('in the validateUsuario');
        let usuario$ = this.http
            .get(`${this.baseUsuarioUrl}/email/${usuarioCredentials.email}`, { headers: this.getHeaders() })
            .map((res: Response) => res.json() as Usuario)
            .do(usuarios$ => {console.log(usuarios$); })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

        return usuario$;
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

