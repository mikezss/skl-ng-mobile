import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-skl-drawer-mobile',
  templateUrl: './skl-drawer-mobile.component.html',
  styleUrls: ['./skl-drawer-mobile.component.less']
})
export class SklDrawerMobileComponent implements OnInit {
  @Input() title = 'drawer';
  @Input() thumb = '';
  @Input() data: any[];
  @Output() action: EventEmitter<any>;


  constructor() {
    this.action = new EventEmitter();
  }

  ngOnInit() {
  }

  doAction(data) {
    this.action.emit(data);
  }

}
