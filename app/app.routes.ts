import { Routes, RouterModule } from '@angular/router';

import { PeopleListComponent } from './components/people-list.component';
import { PersonDetailsComponent } from './components/person-details.component';
import { LoginComponent } from './components/login.component';
import { DashboardComponent } from './components/dashboard.component';


// Route config let's you map routes to components
const routes: Routes = [
  // map '/dashboard' to the dashboard component
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  // map '/login' to the LoginComponent component
  {
    path: 'login',
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
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
