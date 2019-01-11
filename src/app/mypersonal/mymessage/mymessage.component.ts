import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mymessage',
  templateUrl: './mymessage.component.html',
  styleUrls: ['./mymessage.component.less']
})
export class MymessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onLeftClick() {
    history.back();
  }
  renderHeader(){

  }
  onClick(event){

  }

}
