import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import {LoadingSpinnerComponent} from "./shared/loading-spinner/loading-spinner.component";
import {NeedComponent, NgbdModalContent} from "./need/need.component";
import {HttpClientModule} from "@angular/common/http";
import { MapComponent } from './shared/map/map.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { LogisticAidComponent } from './logistic-aid/logistic-aid.component';
import { UserNeedsComponent } from './user-needs/user-needs.component';
import {InfoComponent} from "./home/info.component";
import { CatastropheComponent } from './catastrophe/catastrophe.component';
import { CatastropheListComponent } from './catastrophe-list/catastrophe-list.component';
import { NgbdModalContent2 } from './catastrophe-list/catastrophe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    LoadingSpinnerComponent,
    NeedComponent,
    MapComponent,
    VolunteerComponent,
    LogisticAidComponent,
    NgbdModalContent,
    UserNeedsComponent,
    CatastropheComponent,
    CatastropheListComponent,
    NgbdModalContent2
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    InfoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
