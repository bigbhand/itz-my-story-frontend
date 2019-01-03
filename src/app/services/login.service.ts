import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }

  validateCredentials(username: string, password: string) {
    let url = 'http://localhost:8080/user/login';
    let encodedCredentails = btoa(username + ':' + password);
    let basicHeader = 'Basic ' + encodedCredentails;
    let headers = new Headers({
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : basicHeader
    });

    return this.http.get(url, {headers: headers});
  }

  validateSession() {
    /* let url = 'http://localhost:8080/user/checkSession';
    let headers = new Headers({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers}); */
    if (localStorage.getItem('xAuthToken')) {
        return true;
    } else {
        return false;
    }
  }

  logoutUser() {
    let url = 'http://localhost:8080/user/logout';
    let headers = new Headers({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, '', {headers: headers});
  }
}
