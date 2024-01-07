import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {UNKNOWN_ERROR, USER_NOT_EXIST, WRONG_PASSWORD} from "../constants/auth.constants";
import {Router} from "@angular/router";
import {LoadingService} from "../shared/loading-spinner/loading.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoadingService]
})
export class LoginComponent {
  focus;
  focus1;

  message = ''
  constructor(
      private auth: AuthService,
      private router: Router,
      private loadingService: LoadingService
  ) { }


  login(value: any){
    const login$ = this.auth.login(value)

    this.loadingService.showLoadingUntilComplete(login$).subscribe({
      next: async resp => {
          if (resp.message === WRONG_PASSWORD || resp.message === USER_NOT_EXIST) this.message = resp.message
          else await this.onLoginPassed(resp.message)
      },
      error: err => {
        const errorMessage = err.error.message
        this.message = (errorMessage === WRONG_PASSWORD || errorMessage === USER_NOT_EXIST) ? errorMessage : UNKNOWN_ERROR
      }
    })
  }

  async onLoginPassed(userName: string) {
    localStorage.setItem('userName', userName)
    this.auth.emitIsLoggedIn(true)
    await this.router.navigateByUrl('/home')
  }
}
