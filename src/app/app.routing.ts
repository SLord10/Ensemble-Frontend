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
import {AuthGuard} from "./guards/auth.guard";
import {UserNeedsComponent} from "./user-needs/user-needs.component";
import { CatastropheComponent } from './catastrophe/catastrophe.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'register',           component: SignupComponent, canActivate: [AuthGuard] },
    { path: 'donate',          component: LandingComponent, canActivate: [AuthGuard] },
    { path: 'need',          component: NeedComponent, canActivate: [AuthGuard] },
    { path: 'user-needs',          component: UserNeedsComponent, canActivate: [AuthGuard] },
    { path: 'login',          component: LoginComponent, canActivate: [AuthGuard] },
    { path: 'volunteer',          component: VolunteerComponent, canActivate: [AuthGuard] },
    { path: 'logistic-aid',          component: LogisticAidComponent, canActivate: [AuthGuard] },
    { path: 'catastrophe',          component: CatastropheComponent, canActivate: [AuthGuard] },
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
