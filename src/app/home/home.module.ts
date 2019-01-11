import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {SklCoreMobileModule} from '../skl-core-mobile/skl-core-mobile.module';
import {SklCommonModule} from '../common/common.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
   SklCoreMobileModule, SklCommonModule, HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
