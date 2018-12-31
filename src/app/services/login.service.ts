import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }

  validateCredentials(username:string, password:string){
    let url = "http://localhost:8080/token";
    let encodedCredentails = btoa(username+':'+password);
    let basicHeader = "Basic "+encodedCredentails;
    let headers = new Headers({
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorizaton' : basicHeader
    });

    return this.http.get(url, {headers: headers});
  }
}
