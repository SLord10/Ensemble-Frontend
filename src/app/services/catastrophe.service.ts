import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_TOKEN } from '../config/backend_api.config';
import { Observable, shareReplay } from 'rxjs';
import { Response } from '../model/Response.model';

@Injectable({
  providedIn: 'root'
})
export class CatastropheService {

  constructor(private http: HttpClient,@Inject(API_TOKEN) private apiUrl: string) { }


  postcat(body: any){
    return this.http.post<{message: string}>(`${this.apiUrl}:8085/catastrophe`, body).pipe(
        shareReplay(1)
    )
  }

  getcat(){
    return this.http.get<Response>(`${this.apiUrl}:8085/catastrophe`).pipe(
        shareReplay(1)
    )
  }
  
  uploadImage(file: File): any {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.apiUrl}:8085/catastrophe/upload`, formData);
  }

  getimages(name: string){
    return this.http.get<Response>(`${this.apiUrl}:8085/catastrophe/${name}`).pipe(
        shareReplay(1)
    )
  }
  
}
