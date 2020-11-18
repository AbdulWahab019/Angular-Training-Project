import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-errordialog',
  templateUrl: './errordialog.component.html',
  styleUrls: ['./errordialog.component.css']
})
export class ErrordialogComponent {
  title = 'Angular-Interceptor';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
