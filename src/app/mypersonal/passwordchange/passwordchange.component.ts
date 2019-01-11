import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-passwordchange',
  templateUrl: './passwordchange.component.html',
  styleUrls: ['./passwordchange.component.less']
})
export class PasswordchangeComponent implements OnInit {
  Password = '';
  Newpassword = '';
  Confirmpassword = '';

  constructor() {
  }

  ngOnInit() {
  }

  dosubmit() {

  }

  onLeftClick() {
    history.back();
  }
  renderHeader(){

  }

}
