import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from './account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private accountService: AccountService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email:  ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required],
      zip: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.accountService.register();
  }

}
