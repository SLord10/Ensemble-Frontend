import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
 
export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  autre: number = 0;
  name: string = '';
  email: string = '';
  credit: string = '';
  date: string = '';
  cvc: string = '';

  
  active = 1;
  active1 = 1;
  active2 = 1;

  constructor() { }
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
     this.autre=500;
    }
    if (this.selectedButton === 'btn2') {
      this.autre=200;
     }
     if (this.selectedButton === 'btn1') {
      this.autre=100;
     }
      if (this.selectedButton === 'btn4') {
        this.autre=0;
      }

    // Show input only if 'Autre' button is selected
    this.showInputForAutre = this.selectedButton === 'btn4';
  }
  ngOnInit() {}

}
