import {Inject, Injectable} from '@angular/core';
import {API_TOKEN} from "../config/backend_api.config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, shareReplay} from "rxjs";
import {Response} from "../model/Response.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(false)
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable()

  private loggedInUserSubject = new BehaviorSubject<any>(null)
  loggedInUser$: Observable<any> = this.loggedInUserSubject.asObservable()

  constructor(
      private http: HttpClient,
      @Inject(API_TOKEN) private apiUrl: string
  ) {
    if (this.isLoggedIn()) {
      const loggedInUserName = localStorage.getItem('userName')
      this.getUserByUsername(loggedInUserName).subscribe({
        next: resp => this.emitLoggedInUser(resp.data)
      })
    }
  }

  register(body: any){
    return this.http.post<{message: string}>(`${this.apiUrl}/user/register`, body).pipe(
        shareReplay(1)
    )
  }

  login(body: any){
    return this.http.post<Response>(`${this.apiUrl}/user/login`, body).pipe(
        shareReplay(1)
    )
  }

  getUserByUsername(username: string){
    return this.http.get<Response>(`${this.apiUrl}/user/username/${username}`).pipe(
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

  emitLoggedInUser(value: any){
    this.emitIsLoggedIn(true)
    this.loggedInUserSubject.next(value)
  }

  getLoggedInUser(): any{
    return this.loggedInUserSubject.value
  }
}
