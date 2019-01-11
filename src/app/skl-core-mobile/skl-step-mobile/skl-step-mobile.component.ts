import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skl-step-mobile',
  templateUrl: './skl-step-mobile.component.html',
  styleUrls: ['./skl-step-mobile.component.less']
})
export class SklStepMobileComponent implements OnInit {
  @Input() size = 'small';
  @Input() current = 0;
  @Input() status = 'process';

  @Input() direction = 'horizontal';
  @Input() steps: any[] = [];

  @Output() formdatachange: EventEmitter<any>;

  constructor() { }

  ngOnInit() {
  }

}
