import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../../core/app.routing.module';
import { MatDialog } from '@angular/material';
import { LoginService } from '../../services/login.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {'username': '', 'password': ''};
  showSpinner = false;
  loginCliked = false;
  loggedIn = false;

  constructor(private router: Router, private loginService: LoginService, private alertService: AlertService) { }

  ngOnInit() {
  }

  onLogin(): void {

    this.loginCliked = true;
    this.showSpinner = true;

    this.loginService.validateCredentials(this.credentials.username, this.credentials.password).subscribe(
          res => {
              console.log(res);
              localStorage.setItem("xAuthToken", res.json().token);
              this.loggedIn = true;
              location.reload();
          },
          error => {
              console.log(error);
          }
      );

    /* if (this.username === 'admin' && this.password === 'admin') {
        this.router.navigate(['registration']);
        // this.alertService.success('You have successfully logged in');
    } else {
        this.alertService.error('Invalid credentials');
    } */
  }
}
