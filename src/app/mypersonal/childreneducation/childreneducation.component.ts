import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../login/login.service';

@Component({
  selector: 'app-childreneducation',
  templateUrl: './childreneducation.component.html',
  styleUrls: ['./childreneducation.component.less']
})
export class ChildreneducationComponent implements OnInit {
  current = 0;
  status = 'process';
  steps: any[] = [];

  myinfoformcolnames: any[] = [];
  myinfoformdata: any = {};

  eductioninfoformcolnames: any[] = [];
  educationinfoformdata: any = {};

  constructor(private ls: LoginService) {
  }

  ngOnInit() {
    this.steps = [
      {'status': 'process', 'title': '基本信息', 'description': '基本信息'},
      {'status': 'wait', 'title': '教育信息', 'description': '教育信息'},
      {'status': 'wait', 'title': '扣除比例', 'description': '扣除比例'},
      {'status': 'wait', 'title': '申报方式', 'description': '申报方式'}
    ];

    this.myinfoformcolnames = [
      {
        'Controlname': 'Myinfo', 'Controltype': 'listitem', 'title': '本人信息', 'class': 'listitemtitle'
      },
      {
        'Controlname': 'Mobile', 'Controltype': 'inputitem', 'type': 'phone', 'clear': true, 'placeholder': ''
      },
      {
        'Controlname': 'Email', 'Controltype': 'inputitem', 'type': 'text', 'clear': true, 'placeholder': ''
      },
      {
        'Controlname': 'LinkAddress', 'Controltype': 'inputitem', 'type': 'text', 'clear': true, 'placeholder': ''
      }
    ];

    this.eductioninfoformcolnames = [
      {
        'Controlname': 'Yeartitle', 'Controltype': 'listitem', 'title': '扣除年度', 'class': 'listitemtitle'
      },
      {
        'Controlname': 'Year', 'Controltype': 'datepicker', 'arrow': 'horizontal', 'mode':'year'
      },
      {
        'Controlname': 'Childreninfotitle', 'Controltype': 'listitem', 'title': '子女信息', 'class': 'listitemtitle'
      },
      {
        'Controlname': 'Childreninfo', 'Controltype': 'picker', 'data': [], 'datasource': this.ls.api_url + '/enum/getenumitemoptions',
        'parameter': {'Enumcode': 'sex'}
      },
      {
        'Controlname': 'Birthday', 'Controltype': 'datepicker', 'arrow': 'horizontal'
      },
      {
        'Controlname': 'Childreneduinfotitle', 'Controltype': 'listitem', 'title': '子女教育信息', 'class': 'listitemtitle'
      },
      {
        'Controlname': 'Currenteduperiod', 'Controltype': 'picker', 'data': [], 'datasource': this.ls.api_url + '/enum/getenumitemoptions',
        'parameter': {'Enumcode': 'education'}
      },
      {
        'Controlname': 'Currenteduperiodstart', 'Controltype': 'datepicker', 'arrow': 'horizontal'
      },
      {
        'Controlname': 'Currenteduperiodend', 'Controltype': 'datepicker', 'arrow': 'horizontal'
      },
      {
        'Controlname': 'Eduendtime', 'Controltype': 'datepicker', 'arrow': 'horizontal', 'mode':'month'
      },
      {
        'Controlname': 'Educountry', 'Controltype': 'picker', 'data': [], 'datasource': this.ls.api_url + '/enum/getenumitemoptions',
        'parameter': {'Enumcode': 'country'}
      },
      {
        'Controlname': 'School', 'Controltype': 'inputitem', 'type': 'text', 'clear': true, 'placeholder': 'please input'
      },
    ];


  }

  onLeftClick() {
    if (this.current> 0 && this.current <= 3) {
      this.current = this.current - 1;
      this.steps[this.current].status = 'process';
    }else{
      history.back();
    }
    for (let i = this.current+1; i <= 3; i++) {
      this.steps[i].status = 'wait';
    }

  }

  doAction() {
    if (this.current < 3) {
      this.current = this.current + 1;
      this.steps[this.current].status = 'process';
    }
    for (let i = 0; i < this.current; i++) {
      this.steps[i].status = 'finish';
    }
  }
  doaction(event) {
    console.log(event);
  }

  docancelaction(event) {

  }

  formdatachange(event) {
    console.log(event);
  }

}
