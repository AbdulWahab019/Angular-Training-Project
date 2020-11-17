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
      email:  [
                '',
                [
                  Validators.required,
                  Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
                ],
            ],
      password: [
                  '',
                  [
                    Validators.required,
                    Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
                  ]
                ]
    });
  }

  onSubmit(): void {
    this.accountService.login();
  }
}
