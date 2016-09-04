import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import { PeopleListComponent } from './components/people-list.component';
import { PersonDetailsComponent } from './components/person-details.component';
import { LoginComponent } from './components/login.component';
import { DashboardComponent } from './components/dashboard.component';


@NgModule({
  imports: [ BrowserModule, routing, FormsModule, HttpModule],
  declarations: [ AppComponent, PeopleListComponent, PersonDetailsComponent, LoginComponent, DashboardComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
