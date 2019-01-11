import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../login/login.service';
@Component({
  selector: 'app-mypersonal',
  templateUrl: './mypersonal.component.html',
  styleUrls: ['./mypersonal.component.less']
})
export class MypersonalComponent implements OnInit {
  percent = '0%';
  address = '';

  constructor(private ls: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  renderHeader() {

  }

  onClick(actionname) {
    switch (actionname) {
      case 'personalinfo':
        this.router.navigate(['/personalinfo']);
        break;
      case 'employeeinfo':
        this.router.navigate(['/employeeinfo']);
        break;
      case 'familyinfo':
        this.router.navigate(['/familyinfo']);
        break;
      case 'bankcard':
        this.router.navigate(['/bankcard']);
        break;
      case 'security':
        this.router.navigate(['/security']);
        break;
      case 'address':
        this.router.navigate(['/address']);
        break;
      case 'logout':
        this.ls.logout();
        console.log(this.ls.isOk);
        this.router.navigate(['/login']);
        break;
      case 'aboutus':
        this.router.navigate(['/aboutus']);
        break;
      case 'help':
        this.router.navigate(['/help']);
        break;
    }
  }

}
