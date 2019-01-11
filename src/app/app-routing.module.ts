import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home/home/home.component';
import {LoginComponent} from './login/login/login.component';

import { Routes, RouterModule } from '@angular/router';
import {PasswordchangeComponent} from './mypersonal/passwordchange/passwordchange.component';
import {AboutusComponent} from './mypersonal/aboutus/aboutus.component';
import {MypersonalComponent} from './mypersonal/mypersonal/mypersonal.component';
import {HelpComponent} from './mypersonal/help/help.component';
import {MymessageComponent} from './mypersonal/mymessage/mymessage.component';
import {PersonalinfoComponent} from './mypersonal/personalinfo/personalinfo.component';
import {ChildreneducationComponent} from './mypersonal/childreneducation/childreneducation.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    // canLoad: [AuthGuard]
  },
  {path: 'login', component: LoginComponent},
  {path: 'mypersonal', component: MypersonalComponent},
  {path: 'passwordchange', component: PasswordchangeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'help', component: HelpComponent},
  {path: 'mymessage', component: MymessageComponent},
  {path: 'personalinfo', component: PersonalinfoComponent},
  {path: 'childrenedu', component: ChildreneducationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
