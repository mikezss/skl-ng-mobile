import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import { QRCodeModule } from 'angularx-qrcode';
@NgModule({
  declarations: [],
  imports: [
    FormsModule, ReactiveFormsModule, CommonModule,
    RouterModule, NgZorroAntdMobileModule, HttpClientModule, TranslateModule, QRCodeModule
  ],
  exports: [
    FormsModule, ReactiveFormsModule, CommonModule,
    RouterModule, NgZorroAntdMobileModule, HttpClientModule, TranslateModule, QRCodeModule
  ]
})
export class SklCommonModule { }
