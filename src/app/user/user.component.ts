import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { User } from './user';
import { UserModalComponent } from './user-modal/user-modal.component';
import { UserService } from './user.service';
import Swal from 'sweetalert2';

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

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'User Edited',
        showConfirmButton: false,
        timer: 1500
      });
    });
  }

  deleteUser(user: User): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(user).subscribe((users) => {
          this.userService.publishValue(users);

          Swal.fire(
            'Deleted!',
            'User has been deleted.',
            'success'
          );
        });
      }
    });
  }
}
