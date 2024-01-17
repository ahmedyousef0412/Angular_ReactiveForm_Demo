import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


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

  disableSubmitBtn :boolean = true;
  ngOnInit(): void {

    this.registrationForm = new FormGroup({

      firstname: new FormControl(null,[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8)
      ]),
      lastname: new FormControl(null,[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(12)
      ]),
      email: new FormControl(null,[
         Validators.email,
         Validators.required
        ]),

      username: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl('male'),

      address:new FormGroup({
        street: new FormControl(null ,Validators.required),
        country: new FormControl(null,Validators.required),
        city: new FormControl(null,Validators.required),
        region: new FormControl(null,Validators.required),
        postal: new FormControl(null,Validators.required)
      })    
      

    });


  }
  public get firstName(): FormControl {
    return this.registrationForm.get('firstname') as FormControl;
  }
  public get street(): FormControl {
    return this.registrationForm.get('address.street') as FormControl;
  }
  public get country(): FormControl {
    return this.registrationForm.get('address.country') as FormControl;
  }
  public get city(): FormControl {
    return this.registrationForm.get('address.city') as FormControl;
  }
  
  public get region(): FormControl {
    return this.registrationForm.get('address.region') as FormControl;
  }
  public get postal(): FormControl {
    return this.registrationForm.get('address.postal') as FormControl;
  }
  onFormSubmitted(){
    // console.log(this.registrationForm.value.address.region);
     console.log(this.registrationForm.value);
    
  }

 get isFormValid(){
   return this.registrationForm.invalid;
  }
}