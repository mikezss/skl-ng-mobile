import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SklCoreMobileModule} from '../skl-core-mobile/skl-core-mobile.module';
import {SklCommonModule} from '../common/common.module';
import { MypersonalComponent } from './mypersonal/mypersonal.component';
import { PasswordchangeComponent } from './passwordchange/passwordchange.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HelpComponent } from './help/help.component';
import { MymessageComponent } from './mymessage/mymessage.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { ChildreneducationComponent } from './childreneducation/childreneducation.component';

@NgModule({
  declarations: [MypersonalComponent, PasswordchangeComponent, AboutusComponent, HelpComponent, MymessageComponent, PersonalinfoComponent, ChildreneducationComponent],
  imports: [
    CommonModule, SklCommonModule, SklCoreMobileModule
  ]
})
export class MypersonalModule { }
