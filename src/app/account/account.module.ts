import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { RegisterComponent } from './register.component';
import { AccountService } from './account.service';
import { HttpClientModule } from '@angular/common/http';
import { server } from '../server';
import { ValidationModule } from '../validation/validation.module';

server();

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ValidationModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccountRoutingModule
  ],
  providers: [AccountService]
})
export class AccountModule { }
