import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AppService } from './shared/app.service';
import { AccountModule } from './account/account.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpConfigInterceptor } from './shared/httpconfig.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrordialogComponent } from './error-dialog/errordialog.component';
import { ErrorDialogService } from './error-dialog/errordialog.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrordialogComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AccountModule,
    BrowserAnimationsModule
  ],
  exports: [

  ],
  providers: [
    AppService,
    ErrorDialogService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  entryComponents: [ErrordialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
