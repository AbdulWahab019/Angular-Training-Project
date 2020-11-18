import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserModule } from '../user/user.module';
import { AuthGuardService } from '../shared/auth-guard.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserModule,
    MatProgressSpinnerModule,
    RouterModule.forChild([
      { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] }
    ])
  ]
})
export class HomeModule { }
