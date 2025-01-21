import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CatastropheService } from '../services/catastrophe.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-content',
  template: `
  <div class="modal-header">
      <h5 class="modal-title text-center">Update informations</h5>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
      </button>
  </div>
  <div class="modal-body"> 
  <label><b>Title:</b></label>

      <input [(ngModel)]="title" class="form-control" placeholder="Title" type="text">
      
      <label><b>City:</b></label>
      <input [(ngModel)]="where" class="form-control" placeholder="City" type="text">
      
      <label><b>Date:</b></label>
      <input [(ngModel)]="date" class="form-control" placeholder="Starting date" type="date">
      
      <label><b>Description:</b></label>
      <textarea [(ngModel)]="informations" class="form-control" rows="4" placeholder="Type a message..."></textarea>
       
</div>
  <div class="modal-footer">
      
      <div class="divider"></div>
      <div class="right-side">
          <button type="button" class="btn btn-danger btn-link" (click)="save()">Save</button>
      </div>
  </div>
  `
})
export class NgbdModalContent2 {
  @Input() title: string = "";
  @Input() where: string = "";
  @Input() date: string = "";
  @Input() informations: string = "";
  coordonnees_x: number = 0;
  coordonnees_y: number = 0;
  uri: string = "";
  createdAt: any;
  id: any;
  @Output() refreshCatastrophes: EventEmitter<void> = new EventEmitter<void>();

  save() {

    const catastrophe = {
      titre: this.title,
      date: this.date,
      lieu: this.where,
      coordonnees_x: this.coordonnees_x,
      coordonnees_y: this.coordonnees_y,
      informations: this.informations,
      uri: this.uri,
      createdAt: this.createdAt
    }

    console.log(this.id)
    this.catastropheService.updatecat(this.id, catastrophe).subscribe(
      (response) => {
        this.refreshCatastrophes.emit();
        this.activeModal.close('Close click')

      },
      (error) => {
        console.error('Error:', error);
        // Handle errors here
        this.activeModal.close('Close click')
      }
    );

  }


  constructor(public activeModal: NgbActiveModal, private catastropheService: CatastropheService) { }
}


@Component({
  selector: 'app-catastrophe-list',
  templateUrl: './catastrophe-list.component.html',
  styleUrls: ['./catastrophe-list.component.css']
})
export class CatastropheListComponent implements OnInit {

  focus: any;
  focus1: any;
  userid: any;
  catastrophe: any = {};
  date: any;

  coordinates: { latitude: number, longitude: number } = null;

  showNeedForm = true;
  showAlert = false;
  title: any;
  where: any;
  informations: any;
  uri: any;
  message: string = '';
  catastrophes: any = [];


  constructor(private catastropheService: CatastropheService, private modalService: NgbModal) { }


  ngOnInit(): void {
    this.getCatastrophes();

  }

  deleteCatastrophe(id) {
    this.catastropheService.deletecat(id).subscribe(
      (response) => {
        this.getCatastrophes();
      },
      (error) => {
        console.error('Error:', error);
        // Handle errors here
      }
    );
  }

  getCatastrophes() {
    this.catastropheService.getcat().subscribe(
      (response) => {
        this.catastrophes = response.data;
        console.log(this.catastrophes);
      },
      (error) => {
        console.error('Error:', error);
        // Handle errors here
      }
    );
  }

  open(catastrophe: any) {
    const modalRef = this.modalService.open(NgbdModalContent2);
    modalRef.componentInstance.id = catastrophe.id;
    modalRef.componentInstance.title = catastrophe.titre;
    modalRef.componentInstance.where = catastrophe.lieu;
    modalRef.componentInstance.date = catastrophe.date;
    modalRef.componentInstance.informations = catastrophe.informations;
    modalRef.componentInstance.uri = catastrophe.uri;
    modalRef.componentInstance.coordonnees_x = catastrophe.coordonnees_x;
    modalRef.componentInstance.coordonnees_y = catastrophe.coordonnees_y;
    modalRef.componentInstance.createdAt = catastrophe.createdAt;
    
    modalRef.componentInstance.refreshCatastrophes.subscribe(() => {
      this.getCatastrophes();
    });
  }

}
