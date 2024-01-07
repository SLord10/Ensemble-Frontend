import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {NeedService} from "../services/need.service";

declare var L: any;

@Component({
  selector: 'app-need',
  templateUrl: './need.component.html',
  styleUrls: ['./need.component.css']
})
export class NeedComponent implements OnInit {

  focus: any;
  focus1: any;

  loggedInUser$ = this.auth.getLoggedInUser()

  coordinates: { latitude: number, longitude: number } = null;

  showNeedForm = true;
  showAlert = false;
  constructor(
      private auth: AuthService,
      private needService: NeedService
  ) { }


  ngOnInit() {
    console.log(this.coordinates)
  }

  onSubmit(value: any) {
    const need = {
      ...value,
      coordoonnees_x: this.coordinates?.latitude,
      coordoonnees_y: this.coordinates?.longitude,
      votes: 0,
      etat: "en attente",
      user_id: this.loggedInUser$?.id
    }
    this.needService.saveNeed(need).subscribe({
        next: resp => {
            this.showNeedForm = false;
            this.showAlert = true;
        }
    })
    console.log(need);
  }


  protected readonly onsubmit = onsubmit;
}
