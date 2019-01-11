import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  carouselslidedata: any[] = [];
  carouselslideheight = '184px';
  drawerdata: any[];
  searchvalue = '';
  showdrawer = false;
  height: number = 0;
  nums: Array<number> = [1, 2, 3, 4, 5];
  list = [
    {'icon': 'check-circle', 'text': '子女教育'},
    {'icon': 'check-circle', 'text': '继续教育'},
    {'icon': 'check-circle', 'text': '大病医疗'},
    {'icon': 'check-circle', 'text': '住房贷款利息'},
    {'icon': 'check-circle', 'text': '住房租金'},
    {'icon': 'check-circle', 'text': '赡养老人'}
  ];

  data = this.list.map(item => ({
    icon: item.icon,
    text: item.text
  }));



  constructor(private router: Router) {
  }

  ngOnInit() {
    this.carouselslidedata = [
      {'url': 'https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png', 'router': '/personalinfo'},
      {'url': 'https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png', 'router': '/personalinfo'},
      {'url': 'https://zos.alipayobjects.com/rmsportal/IJOtIlfsYdTyaDTRVrLI.png', 'router': '/personalinfo'}
    ];
  }

  dodrawer(event) {
    console.log(event);
  }

  dosearch() {
    console.log(this.searchvalue);
  }

  onSelect(event) {
    console.log(event.id);
    if (event.id == 0) {
      this.router.navigate(['/mymessage']);
    }
  }

  onVisibleChange(event) {
    console.log(event);
  }

  onLeftClick() {
    console.log('onLeftClick');
    this.showdrawer = !this.showdrawer;
  }

  doAction(event) {
    console.log(event);
    this.router.navigate(['/expense']);
  }

  onClick(actionname) {
    if (actionname == 'logout') {
      this.router.navigate(['/login']);
    }
    if (actionname == 'help') {
      this.router.navigate(['/help']);
    }
  }

  onOpenChange(event) {
    console.log(event);
    this.showdrawer = !this.showdrawer;
    if (this.showdrawer == true) {
      this.height = 320;
      // document.documentElement.clientHeight;
    } else {
      this.height = 0;
    }

  }


  beforeChange(event) {
    console.log('slide ' + event.from + ' to ' + event.to);
  }

  afterChange(event) {
    console.log('slide to ' + event);
  }

  dogrid(event) {
    console.log(event);
    this.router.navigate(['/childrenedu']);
  }

  doclickcarouselslide(event) {
    console.log(event);
    this.router.navigate([event.router]);
  }

}
