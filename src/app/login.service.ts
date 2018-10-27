import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {Http, Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor (private http: Http) {}

  sendCredential(username: string, password: string) {
    let url = "https://customerside-bank-portal.herokuapp.com/index";
    let params = 'username='+username+'&password='+password;
    let headers = new Headers(
    {
      'Content-Type': 'application/x-www-form-urlencoded'
    //  'Access-Control-Allow-Credentials' : true,
    });
    return this.http.post(url, params, {headers: headers, withCredentials : true});
  }

  logout() {
     let url = "https://customerside-bank-portal.herokuapp.com/logout";
     return this.http.get(url, { withCredentials: true });
   }

}
