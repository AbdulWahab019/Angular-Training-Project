import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppService } from 'src/app/shared/app.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {
  form: FormGroup;
  companies: {};

  @Input() userID: number;
  @Input() pageTitle: string;
  @Input() user: any;
  @Output() updatedUsers = new EventEmitter<User>();

  constructor(private formBuilder: FormBuilder,
              private appService: AppService,
              public dialogRef: MatDialogRef<UserModalComponent>,
              public userService: UserService) { }

  ngOnInit(): void {
    this.companies = this.appService.getCompanies();

    this.initForm(this.user);
  }

  onSubmit(): void {
    this.closeModal();

    if (this.pageTitle === 'Add User'){
      this.user = this.form.value;
      this.user.id = this.userID;

      this.userService.addUser(this.user).subscribe((data) => {
        this.updatedUsers.next(data);
      });
    }
    else if (this.pageTitle === 'Edit User'){
      this.user = this.form.value;
      this.user.id = this.userID;

      this.userService.updateUser(this.user).subscribe((data) => {
        this.updatedUsers.next(data);
      });
    }
  }

  closeModal(): void{
    this.dialogRef.close();
  }

  initForm(data: any): void{
    this.form = this.formBuilder.group({
      name: [data.name, Validators.required],
      email:  [data.email, [
                    Validators.required,
                    Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
                  ]
              ],
      phone: [data.phone, Validators.required],
      address: [data.address, Validators.required],
      zip: [data.zip, Validators.required],
      company: [data.company, Validators.required]
    });
  }
}
