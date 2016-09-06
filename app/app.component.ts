import { Component } from '@angular/core';
import { PeopleService } from './services/people.service';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'my-app',
  template: `<router-outlet>`,
  providers: [PeopleService, UsuarioService]
})
export class AppComponent {
}
