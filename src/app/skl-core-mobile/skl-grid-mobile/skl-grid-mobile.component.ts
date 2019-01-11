import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CoreService} from '../core.service';

@Component({
  selector: 'app-skl-grid-mobile',
  templateUrl: './skl-grid-mobile.component.html',
  styleUrls: ['./skl-grid-mobile.component.less']
})
export class SklGridMobileComponent implements OnInit {
  @Input() griddata: any[];
  @Input() columnNum = 4;
  @Input() hasLine = true;
  @Input() isCarousel = false;
  @Input() carouselMaxRow = 2;
  @Input() square = true;
  @Input() datasource = '';
  @Input() parameter = {};
  @Output() action: EventEmitter<any>;

  constructor(private cs: CoreService) {
    this.action = new EventEmitter();
  }

  ngOnInit() {
    if (this.datasource != null && this.datasource != '' && this.datasource != 'undefined') {
      this.cs.getdatasource(this.datasource, this.parameter).subscribe(data => {
        this.griddata = data;
      });
    }

  }

  doAction(event) {
    this.action.emit(event);
  }


}
