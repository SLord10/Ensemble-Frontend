import { Component, Input, OnInit } from '@angular/core';
import { LogisticService } from '../services/logistic.service';
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
  <div class="modal-body"> Thank You! Rest assured that our team will carefully study your request.</div>
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

@Component({
  selector: 'app-logistic-aid',
  templateUrl: './logistic-aid.component.html',
  styleUrls: ['./logistic-aid.component.css']
})
export class LogisticAidComponent implements OnInit {

  
  focus: any;
  focus1: any;
  autre: string = '';
  start: Date = new Date();
  end: Date = new Date();
  quantity:  number = 0;
  showNeedForm = true;
  showAlert = false;

  coordinates: { latitude: number, longitude: number } = null;
  active = 1;
  active1 = 1;
  active2 = 1;
  constructor( private logisticservice: LogisticService,private modalService: NgbModal) { }
  isButtonSelected = false;
  showInputForAutre = false;
  selectedButton: string | null = null;

  toggleButton() {
    this.isButtonSelected = !this.isButtonSelected;

    // If 'Autre' button is deselected, hide the input
    if (!this.isButtonSelected && this.selectedButton === 'btn4') {
      this.showInputForAutre = false;
    }
  }

  selectButton(button: string) {
    this.selectedButton = button === this.selectedButton ? null : button;

    if (this.selectedButton === 'btn3') {
     this.autre="Van";
    }
    if (this.selectedButton === 'btn2') {
      this.autre="Truck";
     }
     if (this.selectedButton === 'btn1') {
      this.autre="Pickup";
     }
      if (this.selectedButton === 'btn4') {
        this.autre="";
      }

    // Show input only if 'Autre' button is selected
    this.showInputForAutre = this.selectedButton === 'btn4';
  }

  onSubmit(value: any) {
    const aid = {
      coordoonnees_x: this.coordinates?.latitude,
      coordoonnees_y: this.coordinates?.longitude,
      dateDebut: this.start,
      dateFin: this.end,
      type: this.autre,
      catastrophe_id: 1,
      quantite: this.quantity,
      
    }

    this.logisticservice.postlogistic(aid).subscribe({
        next: resp => {
            this.showNeedForm = false;
            this.showAlert = true;
        }
    })
    this.showNeedForm = false;
            this.showAlert = true;
    console.log(aid);
    this.open();

  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
}


  ngOnInit(): void {
  }

}
