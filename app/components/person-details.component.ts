import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { Person } from '../models/person';
import { PeopleService } from '../services/people.service';

import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
    selector: 'person-details',
    templateUrl: 'app/components/person-details.component.html'
})
export class PersonDetailsComponent implements OnInit, OnDestroy {
    person: Person;
    usuario: Usuario;
    sub: any;
    professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];

    constructor(private peopleService: PeopleService,
        private usuarioService: UsuarioService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        this.usuario.usuario = 'Mariano Di Maggio';
        this.usuario.clave = 'user123mad';

        this.usuarioService
            .saveUsuario(this.usuario);
    }

    saveUsuarioDetails() {
        this.usuarioService
            .saveUsuario(this.usuario)
       ;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    gotoPeoplesList() {
        let link = ['/persons'];
        this.router.navigate(link);
    }

    savePersonDetails() {
        this.peopleService
            .save(this.person)
            .subscribe(
            (r: Response) => { console.log('success'); }
            );
    }

}




    // ngOnInit(){
    //     this.sub = this.route.params.subscribe(params => {
    //       let id = Number.parseInt(params['id']);
    //       console.log('getting person with id: ', id);
    //       this.peopleService
    //         .get(id)
    //         .subscribe(p => this.person = p);
    //     });
    // ngOnInit() {
    //        this.sub = this.route.params.subscribe(params => {
    //        // let id = Number.parseInt(params['id']);
    //        let id = '57c2567cb5cf942160a50582';
    //        console.log('getting usuario with id: ', id);
    //        this.usuarioService
    //          .get(id)
    //          .subscribe(p => this.usuario = p);
    //      });
    // }
