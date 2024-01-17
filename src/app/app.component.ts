import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'Angular_ReactiveForm_Demo';

  registrationForm: FormGroup;


  ngOnInit(): void {

    this.registrationForm = new FormGroup({

      firstname: new FormControl(null),
      lastname: new FormControl(null),
      email: new FormControl(null),
      username: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl('male'),

      street: new FormControl(null),
      country: new FormControl('India'),
      city: new FormControl(null),
      region: new FormControl(null),
      postal: new FormControl(null)



    });


  }



  onFormSubmitted(){
    console.log(this.registrationForm.value.firstname);
    
  }
}