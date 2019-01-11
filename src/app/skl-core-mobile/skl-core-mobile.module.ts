import {NgModule} from '@angular/core';
import {SklCommonModule} from '../common/common.module';
import {SklFormMobileComponent} from './skl-form-mobile/skl-form-mobile.component';
import {SklGridMobileComponent} from './skl-grid-mobile/skl-grid-mobile.component';
import {SklDrawerMobileComponent} from './skl-drawer-mobile/skl-drawer-mobile.component';
import {LoginService} from '../login/login.service';
import {TranslateService} from '@ngx-translate/core';
import {TranslateLoader, TranslateFakeLoader} from '@ngx-translate/core';
import {TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpParams} from '@angular/common/http';
import { SklStepMobileComponent } from './skl-step-mobile/skl-step-mobile.component';
import { SklCarouselslideMobileComponent } from './skl-carouselslide-mobile/skl-carouselslide-mobile.component';

export function createTranslateHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [SklFormMobileComponent, SklGridMobileComponent, SklDrawerMobileComponent, SklStepMobileComponent, SklCarouselslideMobileComponent],
  imports: [
    SklCommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateHttpLoader),
        deps: [HttpClient]
      }
    })
  ],
  exports: [SklFormMobileComponent, SklGridMobileComponent, SklDrawerMobileComponent, SklStepMobileComponent, SklCarouselslideMobileComponent],
  providers: [LoginService, TranslateService]
})
export class SklCoreMobileModule {
}
