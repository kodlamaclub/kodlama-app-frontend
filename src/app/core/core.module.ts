import {HttpTokenInterceptor} from '@core/interceptors/http.token.interceptor';
import {HttpErrorInterceptor} from '@core/interceptors/http.error.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BreakpointService} from "@core/services/breakpoint.service";
import {SnackbarService} from "@core/services/snackbar.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {StorageService} from "@core/services/storage.service";
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {AuthService} from "@core/services/auth.service";
import {BrowserModule} from '@angular/platform-browser';
import {FlexLayoutModule} from "@angular/flex-layout";
import {ApiService} from "@core/services/api.service";
import {DaysPipe} from "@shared/pipes/days.pipe";
import {LottieModule} from "ngx-lottie";
import player from "lottie-web";

export function playerFactory(): any {
  return player;
}

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    LottieModule.forRoot({player: playerFactory}),
  ],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    ApiService,
    AuthService,
    BreakpointService,
    SnackbarService,
    StorageService,
    DaysPipe,
  ]
})

export class CoreModule {

  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {

    if (coreModule) {
      throw new Error('You should import core module only in the root module');
    }
  }

}
