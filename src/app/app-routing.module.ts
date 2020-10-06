import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConcertsComponent} from './components/concerts/concerts.component';
import {AboutComponent} from './components/about/about.component';
import {ConcertDetailsComponent} from './components/concert-details/concert-details.component';
import {HomeComponent} from './components/home/home.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {ContactComponent} from './components/contact/contact.component';
import { ConcertDetailsGuard } from './guards/concert-details.guard';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'concerts', component:ConcertsComponent},
  {path: 'concerts/:id', component:ConcertDetailsComponent, canActivate:[ConcertDetailsGuard]},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'register',component:RegisterFormComponent},
  {path: 'login',component:LoginFormComponent},
  {path: '',redirectTo:'/home',pathMatch:'full'},
  {path: '**', component:PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

