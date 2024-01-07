import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {UNKNOWN_ERROR, USER_ALREADY_EXIST, USER_NOT_EXIST, WRONG_PASSWORD} from "../constants/auth.constants";
import {Router} from "@angular/router";
import {LoadingService} from "../shared/loading-spinner/loading.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    providers: [LoadingService]
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;

    message = ''
    constructor(
        private auth: AuthService,
        private router: Router,
        private loadingService: LoadingService
    ) { }

    isCheckboxChecked = false;

    ngOnInit() {}

    register(value: any){
        const register$ = this.auth.register(value)

        this.loadingService.showLoadingUntilComplete(register$).subscribe({
            next: async resp => {
                if (resp.message === USER_ALREADY_EXIST) this.message = resp.message
                else await this.onRegisterPassed()
            },
            error: err => {
                const errorMessage = err.error.message
                console.log(err)
                this.message = (errorMessage === USER_ALREADY_EXIST) ? errorMessage : UNKNOWN_ERROR
            }
        })
    }

    async onRegisterPassed(){
        console.log('onRegisterPassed')
        await this.router.navigateByUrl('/login')
    }
}
