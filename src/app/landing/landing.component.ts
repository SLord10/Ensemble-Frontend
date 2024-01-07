import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
 
export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  
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

    // Show input only if 'Autre' button is selected
    this.showInputForAutre = this.selectedButton === 'btn4';
  }
  ngOnInit() {}

}
