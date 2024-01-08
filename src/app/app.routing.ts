import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import {NeedComponent} from "./need/need.component";
import { VolunteerComponent } from './volunteer/volunteer.component';
import { LogisticAidComponent } from './logistic-aid/logistic-aid.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'donate',          component: LandingComponent },
    { path: 'need',          component: NeedComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'volunteer',          component: VolunteerComponent },
    { path: 'logistic-aid',          component: LogisticAidComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
