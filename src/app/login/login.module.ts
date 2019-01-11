import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {SklCoreMobileModule} from '../skl-core-mobile/skl-core-mobile.module';
import {SklCommonModule} from '../common/common.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, SklCommonModule, SklCoreMobileModule
  ]
})
export class LoginModule { }
