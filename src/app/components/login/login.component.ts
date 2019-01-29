import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../../core/app.routing.module';
import { MatDialog } from '@angular/material';
import { LoginService } from '../../services/login.service';
import { AlertService } from '../../services/alert.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

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
  loginFailed = false;

  constructor(private router: Router, private loginService: LoginService, private alertService: AlertService, public dialog: MatDialog) { }

  ngOnInit() {
      if (this.loginService.validateSession()) {
        this.loggedIn = true;
      } else {
         this.loggedIn = false;
      } 
      /* this.loginService.validateSession().subscribe(
          res => { this.loggedIn = true },
          error => { this.loggedIn = false; console.log(error) }
      ); */
  }

  onLogin(): void {

    this.loginCliked = true;
    this.showSpinner = true;

    this.loginService.validateCredentials(this.credentials.username, this.credentials.password).subscribe(
          res => {
              console.log('SUCCESS' + res);
              localStorage.setItem("xAuthToken", res.json().token);
              this.loggedIn = true;
              location.reload();
              this.showSpinner = false;
              this.loginFailed = false;
          },
          error => {
              console.log('ERROR' + error);
              this.loginFailed = true;
              this.showSpinner = false;
          }
      );

  }

  openForgotPasswordDialog(): void {
        const dialogRef = this.dialog.open(ForgotPasswordComponent, {
            width: '400px',
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

}
