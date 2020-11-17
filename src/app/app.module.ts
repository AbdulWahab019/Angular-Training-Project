import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AppService } from './shared/app.service';
import { AccountModule } from './account/account.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AccountModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
