import { Component, OnInit } from '@angular/core';
import { CatastropheService } from '../services/catastrophe.service';

@Component({
  selector: 'app-catastrophe',
  templateUrl: './catastrophe.component.html',
  styleUrls: ['./catastrophe.component.css']
})
export class CatastropheComponent implements OnInit {
  
  focus: any;
  focus1: any;
  userid: any;
  catastrophe: any = {};
  date:any;

  coordinates: { latitude: number, longitude: number } = null;

  showNeedForm = true;
  showAlert = false;
  title: any;
  where: any;
  informations: any;
  uri: any;
  message:string = '';
  selectedFile: File | null = null;

  constructor(private catastropheService: CatastropheService) { }

  ngOnInit(): void {
  }

  getImage(name){
    this.catastropheService.getimages(name).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error('Error:', error);
        // Handle errors here
      }
    );
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }



  async onSubmit(value: any) {
    if (this.selectedFile) {
      try {
        // Wait for the file upload to finish and get the response
        const uploadResponse = await this.catastropheService.uploadImage(this.selectedFile).toPromise();
        this.uri = uploadResponse.message; // Extract the message (file name or URI)
  
        // Prepare the catastrophe data
        const catastrophe = {
          titre: this.title,
          date: this.date,
          lieu: this.where,
          coordonnees_x: this.coordinates?.latitude,
          coordonnees_y: this.coordinates?.longitude,
          informations: this.informations,
          gravite: 3,
          uri: this.uri,
        };
  
        // Send the catastrophe data to the backend
        const postResponse = await this.catastropheService.postcat(catastrophe).toPromise();
        this.message = postResponse.message;
        console.log(postResponse);
  
      } catch (error) {
        console.error('Error during file upload or posting catastrophe:', error);
      }
    } else {
      console.error('No file selected.');
    }
  }
  

}
