import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LoginService} from '../login.service';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  Userid = '';
  Password = '';
  Companycode = '';
  formcolnames: any[] = [];
  formdata: any = {};

  constructor(private loginService: LoginService, public translate: TranslateService, private router: Router) { }

  ngOnInit() {
    this.formcolnames = [
      {
        'Controlname': 'Userid', 'Controltype': 'inputitem', 'type': 'text', 'clear': true, 'placeholder': ''
      },
      {
        'Controlname': 'Password', 'Controltype': 'inputitem', 'type': 'password', 'clear': true, 'placeholder': ''
      },
      {
        'Controlname': 'Companycode', 'Controltype': 'inputitem', 'type': 'text', 'clear': true, 'placeholder': ''
      },
      {
        'Controlname': 'Lang', 'Controltype': 'picker', 'data': [], 'datasource': this.loginService.api_url + '/enum/getenumitemoptions',
        'parameter': {'Enumcode': 'lang'}
      },
      {
        'Controlname': 'Login', 'Controltype': 'button', 'type': 'primary'
      }
      ];
  }

  renderHeader() {
    return 'login';
  }
  doaction(event) {
    console.log(event);
    console.log(this.formdata);
    this.loginService.loginCheck(this.formdata.Userid, this.formdata.Password, this.formdata.Companycode)
      .subscribe(response => {
        if (response.status === 'ok') {
          this.loginService.isOk = true;
          this.loginService.userid = this.Userid;
          let navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          };
          this.router.navigate(['/home'], navigationExtras);
        }

      });
  }

  docancelaction(event) {

  }

  formdatachange(event) {
    console.log(event);
    console.log(this.formdata);
  }

}
