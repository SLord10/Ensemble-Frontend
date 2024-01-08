import { Component, Input, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {NeedService} from "../services/need.service";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-modal-content',
  template: `
  <div class="modal-header">
      <h5 class="modal-title text-center">Well done!</h5>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
      </button>
  </div>
  <div class="modal-body"> Thank You for Sharing Your Needs with Us. Rest assured that our team will carefully study your request and do our utmost to address your concerns.</div>
  <div class="modal-footer">
     
      <div class="divider"></div>
      <div class="right-side">
          <button type="button" class="btn btn-danger btn-link" (click)="activeModal.close('Close click')">Close</button>
      </div>
  </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

declare var L: any;

@Component({
  selector: 'app-need',
  templateUrl: './need.component.html',
  styleUrls: ['./need.component.css']
})
export class NeedComponent implements OnInit {

  focus: any;
  focus1: any;
  userid: any;

  loggedInUser$ = this.auth.getLoggedInUser()

  coordinates: { latitude: number, longitude: number } = null;

  showNeedForm = true;
  showAlert = false;
  constructor(
      private auth: AuthService,
      private needService: NeedService,
      private modalService: NgbModal
  ) { }


  ngOnInit() {

    this.auth.loggedInUser$.subscribe({
      next: data => {
        this.userid = data?.user_id;
      }
    })

  }

  onSubmit(value: any) {
    const need = {
      ...value,
      coordoonnees_x: this.coordinates?.latitude,
      coordoonnees_y: this.coordinates?.longitude,
      votes: 0,
      etat: "en attente",
      user_id: this.userid
    }
    this.needService.saveNeed(need).subscribe({
        next: resp => {
            this.showNeedForm = false;
            this.showAlert = true;
        }
    })
    console.log(need);
    this.open();
  }


  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
}
  protected readonly onsubmit = onsubmit;
}
