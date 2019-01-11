import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // replace "192.168.252.180:8088" with skl-go api server ip and port
  api_url = 'http://192.168.252.180:8088';
  isOk = false;
  redirectUrl = '';
  userid = '';
  lang = 'Chinese';

  constructor(private http: HttpClient) {

  }

  loginCheck(username, password, companycode): Observable<any> {
    return this.http.post(this.api_url + '/login/login',
      JSON.stringify({'userName': username, 'password': password, 'companycode': companycode}), httpOptions);
  }
  logout() {
    this.isOk = false;
    this.userid = '';
    this.redirectUrl = '';
  }
}
