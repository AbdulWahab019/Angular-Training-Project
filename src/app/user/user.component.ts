import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';
import { User } from './user';
import { UserModalComponent } from './user-modal/user-modal.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() users: User[];

  constructor(private matDialog: MatDialog, private userService: UserService) { }

  ngOnInit(): void {
  }

  editUser(user: User): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '720px';
    dialogConfig.width = '600px';

    const modalDialog = this.matDialog.open(UserModalComponent, dialogConfig);
    (modalDialog.componentInstance as UserModalComponent).userID = user.id;
    (modalDialog.componentInstance as UserModalComponent).user = user;
    (modalDialog.componentInstance as UserModalComponent).pageTitle = 'Edit User';

    modalDialog.componentInstance.updatedUsers.subscribe((emittedValue) => {
      this.userService.publishValue(emittedValue);
    });
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user).subscribe((users) => {
      console.log(users);
      this.userService.publishValue(users);
    });
  }
}
