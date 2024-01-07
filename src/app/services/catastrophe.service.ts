import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_TOKEN } from '../config/backend_api.config';
import { shareReplay } from 'rxjs';
import { Response } from '../model/Response.model';

@Injectable({
  providedIn: 'root'
})
export class CatastropheService {

  constructor(private http: HttpClient,@Inject(API_TOKEN) private apiUrl: string) { }


  postcat(body: any){
    return this.http.post<{message: string}>(`${this.apiUrl}/catastrophe`, body).pipe(
        shareReplay(1)
    )
  }

  getcat(){
    return this.http.get<Response>(`${this.apiUrl}/catastrophe`).pipe(
        shareReplay(1)
    )
  }


}
