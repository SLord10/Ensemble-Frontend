import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_TOKEN } from '../config/backend_api.config';
import { shareReplay } from 'rxjs';
import { Response } from '../model/Response.model';

@Injectable({
  providedIn: 'root'
})
export class LogisticService {

  constructor(private http: HttpClient,@Inject(API_TOKEN) private apiUrl: string) { }

  postlogistic(body: any){
    return this.http.post<{message: string}>(`${this.apiUrl}:8084/aide/aide-logistique`, body).pipe(
        shareReplay(1)
    )
  }

  getlogistic(){
    return this.http.get<Response>(`${this.apiUrl}:8084/aide/aide-logistique`).pipe(
        shareReplay(1)
    )

  }

}
