import { Component, OnInit } from '@angular/core';
import { CatastropheService } from '../services/catastrophe.service';
import { Response } from '../model/Response.model';

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
        (response:  Response ) => {
           this.catastrophes = response.data;
           console.log(this.catastrophes);
        },
        (error) => {
            console.error('Error:', error);
            // Handle errors here
        }
    );
}

}
