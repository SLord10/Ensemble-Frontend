import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {LOGIN_NEEDED, UNKNOWN_ERROR, USER_NOT_EXIST, WRONG_PASSWORD} from "../constants/auth.constants";
import {ActivatedRoute, Router} from "@angular/router";
import {LoadingService} from "../shared/loading-spinner/loading.service";
import {map, Observable, shareReplay} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoadingService]
})
export class LoginComponent implements OnInit {
  focus;
  focus1;

  target = ''
  receivedMessage$: Observable<string>

  message = ''

  constructor(
      private auth: AuthService,
      private router: Router,
      private route: ActivatedRoute,
      private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    const target$ = this.route.queryParams.pipe(
        map(params => params['target']),
        shareReplay(1)
    )

    this.receivedMessage$ = target$.pipe(
        map(target =>{
          this.target = target
          return LOGIN_NEEDED
        })
    )
  }


  login(value: any){
    const login$ = this.auth.login(value)

    this.loadingService.showLoadingUntilComplete(login$).subscribe({
      next: async resp => {
          if (resp.message === WRONG_PASSWORD || resp.message === USER_NOT_EXIST) this.message = resp.message
          else await this.onLoginPassed(resp.data)
      },
      error: err => {
        const errorMessage = err.error.message
        this.message = (errorMessage === WRONG_PASSWORD || errorMessage === USER_NOT_EXIST) ? errorMessage : UNKNOWN_ERROR
      }
    })
  }

  async onLoginPassed(data: any) {
    localStorage.setItem('userName', data.username)
    this.auth.emitLoggedInUser(data)
    await this.router.navigateByUrl(this.target || '/home')
  }
}
