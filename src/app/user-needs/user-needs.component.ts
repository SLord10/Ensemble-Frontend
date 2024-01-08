import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {map, switchMap} from "rxjs";
import {NeedService} from "../services/need.service";

@Component({
  selector: 'app-user-needs',
  templateUrl: './user-needs.component.html',
  styleUrls: ['./user-needs.component.css']
})
export class UserNeedsComponent implements OnInit {

  loggedInUser$ = this.auth.loggedInUser$;
  needs$ = this.loggedInUser$.pipe(
      map(user => user?.user_id),
      switchMap(user_id => this.needService.getNeedsByUserId(user_id)),
      map(respone => respone.data)
  );

  constructor(
      private auth: AuthService,
      private needService: NeedService
  ) { }

  ngOnInit(): void {

  }

}
