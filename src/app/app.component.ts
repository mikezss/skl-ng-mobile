import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'skl-mobile';
  constructor(private router: Router) {
  }
  ngOnInit() {

  }
  doAction(actionname) {
    console.log(actionname);
    if(actionname == 'Home') {
      this.router.navigate(['/home']);
    }
    if(actionname == 'Mypersonal') {
      this.router.navigate(['/mypersonal']);
    }
    if(actionname == 'search') {
      this.router.navigate(['/search']);
    }

  }
}
