import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { UserModalComponent } from './user-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationModule } from 'src/app/validation/validation.module';

@NgModule({
  declarations: [
    UserModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    ValidationModule
  ],
  exports: [UserModalComponent],
})
export class UserModalModule { }
