import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule  } from '@angular/http';
import { AppComponent }  from './app.component';

import { routing } from './app.routes';

import { PeopleListComponent } from './components/people-list.component';
import { PersonDetailsComponent } from './components/person-details.component';
import { LoginComponent } from './components/login.component';
import { DashboardComponent } from './components/dashboard.component';


@NgModule({
  imports: [ BrowserModule, routing, FormsModule, HttpModule, JsonpModule],
  declarations: [ AppComponent, PeopleListComponent, PersonDetailsComponent, LoginComponent, DashboardComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
