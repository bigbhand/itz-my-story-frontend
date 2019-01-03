import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoPath = 'assets/images/app-logo.png' ;
  loggedIn = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
      if (this.loginService.validateSession()) {
        this.loggedIn = true;
      } else {
         this.loggedIn = false;
      }
  }

  onLogout(): void {
      this.loginService.logoutUser().subscribe(
          res => {
               localStorage.removeItem('xAuthToken');
               location.reload();
          },
          error => {
                console.log(error);
          }
      )
  }

}
