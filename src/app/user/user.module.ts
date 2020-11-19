import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserModalModule } from './user-modal/user-modal.module';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserModalModule,
  ],
  exports: [
    UserComponent,
    UserModalModule,
  ]
})
export class UserModule { }
