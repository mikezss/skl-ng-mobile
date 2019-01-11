import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LoginService} from '../../login/login.service';
import {CoreService} from '../core.service';
import {LocaleProviderService} from 'ng-zorro-antd-mobile';
import {en_US, ru_RU, zh_CN, sv_SE, da_DK} from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-skl-form-mobile',
  templateUrl: './skl-form-mobile.component.html',
  styleUrls: ['./skl-form-mobile.component.less']
})
export class SklFormMobileComponent implements OnInit {
  @Input() hasnavbar = true;
  @Input() hasreturn = true;
  @Input() formtitle: string;
  @Input() formcolnames: any[];
  @Input() formdata: any = {};
  @Output() action: EventEmitter<any>;
  @Output() cancelaction: EventEmitter<any>;
  @Output() formdatachange: EventEmitter<any>;
  autoFocus = {focus: true};

  constructor(private ls: LoginService, private cs: CoreService, public translate: TranslateService, private localeProviderService: LocaleProviderService) {
    this.action = new EventEmitter();
    this.cancelaction = new EventEmitter();
    this.formdatachange = new EventEmitter();
  }

  ngOnInit() {
    this.translate.use(this.ls.lang);
    switch (this.ls.lang) {
      case 'Chinese':
        this.localeProviderService.setLocale(zh_CN);
        break;
      case 'English':
        this.localeProviderService.setLocale(en_US);
        break;
      /*case 'Tchinese':
        this.localeProviderService.setLocale(zh_TW);
        break;
      case 'Japanese':
        this.localeProviderService.setLocale(ja_JP);
        break;*/
      default:
        this.localeProviderService.setLocale(zh_CN);
    }

    for (let i = 0; i < this.formcolnames.length; i++) {
      var controltype = this.formcolnames[i].Controltype;
      var datasource = this.formcolnames[i].datasource;
      var parameter = this.formcolnames[i].parameter;
      if (controltype === 'picker' || controltype === 'pickerview') {
        if (datasource != null && datasource != '' && datasource != 'undefined') {
          this.cs.getdatasource(datasource, parameter).subscribe(data => {
            switch (this.formcolnames[i].Controltype) {
              case 'picker':
                this.formcolnames[i].data = data;
                break;
              case 'pickerview':
                this.formcolnames[i].data = data;
                break;
            }
          });
        }
      }
    }

  }

  doAction(actionname) {
    this.action.emit(actionname);
  }

  docancelAction(actionname) {
    this.cancelaction.emit(actionname);
  }

  formdataonchange(controlname) {
    this.formdatachange.emit(controlname);
  }

  renderHeader() {
    return this.formtitle;
  }

  onLeftClick() {
    history.back();
  }

  getextra(result) {
    let value = [];
    let temp = '';
    if (result != 'undifined' && result != null) {
      result.forEach(item => {
        value.push(item.label || item);
        temp += item.label || item;
      });
    }
    return value.map(v => v).join(',');
  }


}
