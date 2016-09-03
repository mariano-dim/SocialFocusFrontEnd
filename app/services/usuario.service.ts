import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
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
    getUsuarios(): Observable<Usuario[]> {

        console.log('in the getUsuarios');

        return this.http
            .get(`${this.baseUsuarioUrl}`, { headers: this.getHeaders() })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

}
