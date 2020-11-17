import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../shared/app.service';
import { AccountService } from './account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  companies: {};
  constructor(private formBuilder: FormBuilder,
              private accountService: AccountService,
              private appService: AppService) { }

  ngOnInit(): void {
    this.companies = this.appService.getCompanies();

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email:  ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required],
      zip: ['', Validators.required],
      company: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.form.value);

    this.accountService.register();
  }

}
