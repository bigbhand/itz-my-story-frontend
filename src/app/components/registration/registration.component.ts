import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../../core/app.routing.module';
import { MatDialog } from '@angular/material';
import { AppService } from '../../services/app.service';
import { AlertService } from '../../services/alert.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  customer: FormGroup = new FormGroup({
    name : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', Validators.required),
    cPassword : new FormControl('', Validators.required),
    mobile : new FormControl('', [Validators.required, Validators.maxLength(10)]),
    dob : new FormControl('', Validators.required),
    address : new FormControl(''),
    city : new FormControl(''),
    state : new FormControl(''),
    pinCode : new FormControl(''),
    accepted : new FormControl(false, Validators.required)
  });
  showSpinner = false;
  registerCliked = false;
  minDateDob = new Date();
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  url = 'https://public-api.wordpress.com/rest/v1.1/sites/vocon-it.com/posts';

  constructor(private router: Router, private appService: AppService, private alertService: AlertService) { }

  ngOnInit() {
  }

  onSubmit(): void {

    if(!this.customer.invalid){
        this.registerCliked = true;
        this.showSpinner = true;

        this.appService.getAll().subscribe(
            restItems => {
              console.log(restItems);
              this.showSpinner = false;
            }
         );
    }

  }
}
