import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../login/login.service';
@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.less']
})
export class PersonalinfoComponent implements OnInit {
  formcolnames: any[] = [];
  formdata: any = {};

  constructor(private ls: LoginService) {
  }

  ngOnInit() {
    // bankCard,phone,password,number,text
    this.formcolnames = [
      {
        'Controlname': 'Userbaseinfo', 'Controltype': 'listitem', 'title': '用户基本信息', 'class': 'listitemtitle'
      },
      {
        'Controlname': 'Name', 'Controltype': 'inputitem', 'type': 'text', 'clear': true, 'placeholder': ''
      },
      {
        'Controlname': 'Idcardtype', 'Controltype': 'picker', 'data': ['身份证', '工作证'], 'datasource': ''
      },
      {
        'Controlname': 'Idcard', 'Controltype': 'inputitem', 'type': 'text', 'clear': true, 'placeholder': ''
      },
      {
        'Controlname': 'Taxno', 'Controltype': 'inputitem',  'type': 'number', 'clear': true, 'placeholder': ''
      },
      {
        'Controlname': 'Birthday', 'Controltype': 'datepicker', 'arrow': 'horizontal'
      },
      {
        'Controlname': 'Sex', 'Controltype': 'picker', 'data': [], 'datasource': this.ls.api_url + '/enum/getenumitemoptions',
        'parameter': {'Enumcode': 'sex'}
      },
      {
        'Controlname': 'Country', 'Controltype': 'picker', 'data': [], 'datasource': this.ls.api_url + '/enum/getenumitemoptions',
        'parameter': {'Enumcode': 'country'}
      },
      {
        'Controlname': 'Residencetitle', 'Controltype': 'listitem', 'title': '户籍所在地', 'class': 'listitemtitle'
      },
      {
        'Controlname': 'Residence', 'Controltype': 'picker', 'data': [], 'datasource': this.ls.api_url + '/enum/getenumitemoptions',
        'parameter': {'Enumcode': 'residence'}
      },
      {
        'Controlname': 'ResidenceAddress', 'Controltype': 'inputitem', 'type': 'text', 'clear': true, 'placeholder': ''
      },
      {
        'Controlname': 'Liveaddresstitle', 'Controltype': 'listitem', 'title': '经常居住地', 'class': 'listitemtitle'
      },
      {
        'Controlname': 'Livearea', 'Controltype': 'picker', 'data': [], 'datasource': this.ls.api_url + '/enum/getenumitemoptions',
        'parameter': {'Enumcode': 'residence'}
      },
      {
        'Controlname': 'LiveAddress', 'Controltype': 'inputitem', 'type': 'text', 'clear': true, 'placeholder': ''
      },
      {
        'Controlname': 'Linkdresstitle', 'Controltype': 'listitem', 'title': '联系地址', 'class': 'listitemtitle'
      },
      {
        'Controlname': 'Linkarea', 'Controltype': 'picker', 'data': [], 'datasource': this.ls.api_url + '/enum/getenumitemoptions',
        'parameter': {'Enumcode': 'residence'}
      },
      {
        'Controlname': 'LinkAddress', 'Controltype': 'inputitem', 'type': 'text', 'clear': true, 'placeholder': ''
      },
      {
        'Controlname': 'Others', 'Controltype': 'listitem', 'title': '其它', 'class': 'listitemtitle'
      },
      {
        'Controlname': 'Degree', 'Controltype': 'picker', 'data': [], 'datasource': this.ls.api_url + '/enum/getenumitemoptions',
        'parameter': {'Enumcode': 'degree'}
      },
      {
        'Controlname': 'Nation', 'Controltype': 'picker', 'data': [], 'datasource': this.ls.api_url + '/enum/getenumitemoptions',
        'parameter': {'Enumcode': 'nation'}
      },
      {
        'Controlname': 'Email', 'Controltype': 'inputitem', 'type': 'text', 'clear': true, 'placeholder': ''
      },
      {
        'Controlname': 'Save', 'Controltype': 'button', 'type': 'primary'
      }

    ]
    ;
  }

  doaction(event) {
    console.log(event);
    console.log(this.formdata);
  }

  docancelaction(event) {

  }

  formdatachange(event) {
    console.log(event);
    console.log(this.formdata);
  }

}
