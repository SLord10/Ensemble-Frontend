import {Inject, Injectable} from '@angular/core';
import {API_TOKEN} from "../config/backend_api.config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(false)
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable()

  constructor(
      private http: HttpClient,
      @Inject(API_TOKEN) private apiUrl: string
  ) {
    if (this.isLoggedIn()) this.emitIsLoggedIn(true)
  }

  register(body: any){
    return this.http.post<{message: string}>(`${this.apiUrl}/user/register`, body).pipe(
        shareReplay(1)
    )
  }

  login(body: any){
    return this.http.post<{message: string}>(`${this.apiUrl}/user/login`, body).pipe(
        shareReplay(1)
    )
  }

  isLoggedIn(){
    return !!localStorage.getItem('userName');
  }

  logout(){
    localStorage.removeItem('userName')
    this.emitIsLoggedIn(false)
  }

  emitIsLoggedIn(value: boolean){
    this.isLoggedInSubject.next(value)
  }
}
