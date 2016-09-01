import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { HTTP_PROVIDERS } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Usuario } from '../models/usuario';

@Injectable()
export class UsuarioService {
    private baseUrl: string = 'http://localhost:8080/api/usuario/';

    constructor(private http: Http) {
    }

    get(id: string): Observable<Usuario> {
        console.log('in the get');
        let usuario$ = this.http
            .get(`${this.baseUrl}/id/${id}`, { headers: this.getHeaders() })
            .map(mapUsuario);
        return usuario$;
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }
    saveJwt(jwt: string) {
        if (jwt) {
            localStorage.setItem('id_token', jwt);
        }
    }

    logError(err: string) {
        console.error('There was an error: ' + err);
    }

    saveUsuario(usuario: Usuario): void {
        let body = JSON.stringify({ Usuario: usuario });
        log.assert(!usuario, 'ok', 'error');
        let command = this.http
            .post(`${this.baseUrl}`, body, { headers: this.getHeaders() })
            .subscribe(
            data => { this.saveJwt(data.json().id_token); },
            err => this.logError(err.text()),
            () => console.log('Random Quote Complete')
            );
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
}



// this could also be a private method of the component class
function handleError(error: any) {
    // log error
    // could be something more sofisticated
    let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
    console.error(errorMsg);

    // throw an application level error
    return Observable.throw(errorMsg);
}

function mapUsuario(response: Response): Usuario {
    // toPerson looks just like in the previous example
    return toUsuario(response.json());
}

function toUsuario(r: any): Usuario {
    let usuario = <Usuario>({
        usuario: r.usuario,
        clave: r.clave

    });
    console.log('Parsed usuario:', usuario);
    return usuario;
}
