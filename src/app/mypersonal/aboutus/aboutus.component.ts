import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.less']
})
export class AboutusComponent implements OnInit {
  formcolnames: any[] = [];
  formdata: any = {};
  constructor() { }

  ngOnInit() {
    this.formcolnames = [
      {
        'Controlname': 'Baseinfo', 'Controltype': 'listitem', 'title': '基本信息', 'extra': '移动端开发平台'
      },
      {
        'Controlname': 'Copyright', 'Controltype': 'listitem', 'title': '版权所有', 'extra': 'mikezss'
      },
      {
        'Controlname': 'Github', 'Controltype': 'qrcode', 'qrdata': 'https://github.com/mikezss', 'size': '512', 'level': 'H', 'usesvg': false
      },
      {
        'Controlname': 'Supportme', 'Controltype': 'listitem'
      },
      ];
  }
}
