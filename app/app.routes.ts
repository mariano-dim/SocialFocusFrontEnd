import { Routes, RouterModule } from '@angular/router';

import { PeopleListComponent } from './components/people-list.component';
import { PersonDetailsComponent } from './components/person-details.component';
import { LoginComponent } from './components/login.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/usuario' to the usuario component
  {
    path: 'usuario',
    component: LoginComponent,
  },  
  // map '/persons' to the people list component
  {
    path: 'persons',
    component: PeopleListComponent,
  },
  // map '/persons/:id' to person details component
  {
    path: 'persons/:id',
    component: PersonDetailsComponent
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/usuario',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
