import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skl-carouselslide-mobile',
  templateUrl: './skl-carouselslide-mobile.component.html',
  styleUrls: ['./skl-carouselslide-mobile.component.less']
})
export class SklCarouselslideMobileComponent implements OnInit {
  @Input() infinite = true;
  @Input() autoplay = true;
  @Input() autoplayInterval = 3000;
  @Input() vertical = false;
  @Input() data: any[] = [];
  @Input() height = 100;
  @Output() beforeChange: EventEmitter<any>;
  @Output() afterChange: EventEmitter<any>;
  @Output() clickimage: EventEmitter<any>;
  constructor() {
    this.beforeChange = new EventEmitter();
    this.afterChange = new EventEmitter();
    this.clickimage = new EventEmitter();
  }

  ngOnInit() {
  }
  beforeChange(event){
    this.beforeChange.emit(event);
  }
  afterChange(event){
    this.afterChange.emit(event);
  }
  doClick(item){
    this.clickimage.emit(item);
  }

}
