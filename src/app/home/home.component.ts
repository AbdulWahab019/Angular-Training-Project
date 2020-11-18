import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppService } from '../shared/app.service';
import { User } from '../user/user';
import { UserModalComponent } from '../user/user-modal/user-modal.component';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  get listFilter(): string{
      return this._listFilter;
  }
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredUsers = this.listFilter ? this.performFilter(this.listFilter) : this.selectedUsers;
  }

  constructor(private appService: AppService,
              private userService: UserService,
              public matDialog: MatDialog) { }

  companies;
  users;
  filteredUsers;
  selectedUsers;
  isLoading = true;

  // tslint:disable-next-line: variable-name
  _listFilter: string;

  ngOnInit(): void {
    this.companies = this.appService.getCompanies();

    this.userService.getUsers().subscribe(data => {
      setTimeout(() => {
        this.users = data;
        this.filteredUsers = this.users;
        this.selectedUsers = this.users;
        this.listFilter = '';
        this.isLoading = false;
      }, 2000);
    });

    this.userService.userDataSubject.subscribe(data => {
        this.users = data;
        this.onChange('');
    });
  }

  performFilter(filterBy: string): {} {
    filterBy = filterBy.toLocaleLowerCase();

    return this.selectedUsers.filter((user: User) =>
        (user.name.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        user.email.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        user.address.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        user.company.toLocaleLowerCase().indexOf(filterBy) !== -1)
        );
  }

  onChange(value: string): void {
    this.selectedUsers = this.users;
    this.selectedUsers = this.performFilter(value);
    this.filteredUsers = this.selectedUsers;
    this.filteredUsers = this.performFilter(this.listFilter);
  }

  addUser(): void {
    let lastUserId: number;
    const userLength = this.users.length;

    if (userLength > 0){
      lastUserId = this.users[userLength - 1].id;
    } else {
      lastUserId = 0;
    }

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '720px';
    dialogConfig.width = '600px';

    const modalDialog = this.matDialog.open(UserModalComponent, dialogConfig);
    (modalDialog.componentInstance as UserModalComponent).userID = (lastUserId + 1);
    (modalDialog.componentInstance as UserModalComponent).user = {};
    (modalDialog.componentInstance as UserModalComponent).pageTitle = 'Add User';

    modalDialog.componentInstance.updatedUsers.subscribe((emittedValue) => {
      this.users = emittedValue;
      this.onChange('');
    });
  }
}
