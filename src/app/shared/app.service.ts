import { Injectable } from '@angular/core';

const companies = [
  {
      id: 1,
      name: 'Alpha'
  },
  {
      id: 2,
      name: 'Beta'
  },
  {
      id: 3,
      name: 'Angular'
  }
];

const users = [
  {
    id: 1,
    email: 'a@b.com',
    name: 'Roger',
    phone: '123-123',
    password: 'admin',
    address: '221-B Baker Street',
    zip: '43200',
    company: 'Angular'
  },
  {
    id: 2,
    email: 'b@bet.com',
    name: 'Angela',
    phone: '321-233',
    password: 'admin',
    address: 'That Street',
    zip: '21200',
    company: 'Beta'
  },
  {
    id: 3,
    email: 'a@alpha.com',
    name: 'Ford',
    phone: '321-233',
    password: 'admin',
    address: 'This Street, That Block',
    zip: '12311',
    company: 'Alpha'
  },
  {
    id: 4,
    email: 'bryan@angular.com',
    name: 'Bryan Steve',
    phone: '924-717',
    password: 'admin',
    address: 'Bradman Block, 724',
    zip: '318288',
    company: 'Angular'
  }
];

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getCompanies(): {} {
    return companies;
  }

  getUsers(): {} {
    return users;
  }
}
