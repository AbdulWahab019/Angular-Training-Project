import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from './account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() email: string;
  @Input() password: string;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private accountService: AccountService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:  ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.accountService.login();
  }
}
