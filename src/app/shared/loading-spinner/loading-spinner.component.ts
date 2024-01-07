import { Component, OnInit } from '@angular/core';
import {LoadingService} from "./loading.service";

@Component({
  selector: 'loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {

  loading$ = this.loadingService.loading$

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
  }

}
