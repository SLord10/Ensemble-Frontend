import { Component, OnInit } from '@angular/core';
import { CatastropheService } from '../services/catastrophe.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    catastrophes: any[] = [];



    focus;
    focus1;
    constructor(private servicecat: CatastropheService) { }

    ngOnInit() {
    this.servicecat.getcat().subscribe(
        (response:  any[] ) => {
           this.catastrophes = response;
        },
        (error) => {
            console.error('Error:', error);
            // Handle errors here
        }
    );
}

}
