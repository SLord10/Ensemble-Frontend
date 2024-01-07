import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_TOKEN} from "../config/backend_api.config";
import {Response} from "../model/Response.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NeedService {

  constructor(
      private http: HttpClient,
      @Inject(API_TOKEN) private apiUrl: string
  ) {}


  saveNeed(need: any): Observable<Response> {
    return this.http.post<Response>(`${this.apiUrl}/besoin`, need)
  }

  getNeedsByUserId(userId: number) {
    return this.http.get<Response>(`${this.apiUrl}/besoin/user/${userId}`)
  }

  upvoteNeed(need: any) {
    return this.http.patch<Response>(`${this.apiUrl}/besoin/${need?.id}`, need)
  }

}
