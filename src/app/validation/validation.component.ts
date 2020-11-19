import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() componentName: string;
  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
