import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  companies;
  users;
  filteredUsers;
  selectedUsers;

  // tslint:disable-next-line: variable-name
  _listFilter: string;
  get listFilter(): string{
      return this._listFilter;
  }
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredUsers = this.listFilter ? this.performFilter(this.listFilter) : this.selectedUsers;
  }

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.companies = this.appService.getCompanies();

    this.users = this.appService.getUsers();
    this.filteredUsers = this.users;
    this.selectedUsers = this.users;
  }

  performFilter(filterBy: string): {} {
    filterBy = filterBy.toLocaleLowerCase();
    return this.selectedUsers.filter((user) =>
        (user.name.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        user.phone.indexOf(filterBy) !== -1 ||
        user.address.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        user.zip.indexOf(filterBy) !== -1 ||
        user.company.toLocaleLowerCase().indexOf(filterBy) !== -1)
        );
  }

  onChange(value): void {
    this.selectedUsers = this.users;
    this.selectedUsers = this.performFilter(value);
    this.filteredUsers = this.selectedUsers;
  }
}
