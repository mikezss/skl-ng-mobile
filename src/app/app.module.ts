import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/** 配置 ng-zorro-antd-mobile 国际化 **/
import { LOCAL_PROVIDER_TOKEN, en_US } from 'ng-zorro-antd-mobile';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { SklCoreMobileModule } from './skl-core-mobile/skl-core-mobile.module';
import { LoginModule } from './login/login.module';
// import { HomeModule } from './home/home.module';
import { SklCommonModule } from './common/common.module';
import { MypersonalModule } from './mypersonal/mypersonal.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    QRCodeModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    /** 导入 ng-zorro-antd-mobile 模块 **/
    NgZorroAntdMobileModule,
    SklCoreMobileModule,
    LoginModule,
    // HomeModule,
    SklCommonModule,
    AppRoutingModule,
    MypersonalModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: LOCAL_PROVIDER_TOKEN, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
