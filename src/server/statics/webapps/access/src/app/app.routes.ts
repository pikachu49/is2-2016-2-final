import {Routes} from '@angular/router';
import {Component} from '@angular/core';
import {LoginComponent} from './components/login/index.ts';
import {RegisterComponent} from './components/register/index.ts';

@Component({
  template: '<h3>Home :D</h3>'
})
class Home {}

export const rootRouterConfig: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: 'login', terminal: true},
];

