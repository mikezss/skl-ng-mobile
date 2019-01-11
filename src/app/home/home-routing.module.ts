import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
const adminRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuard],
    children: [
    ]
  }

  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
