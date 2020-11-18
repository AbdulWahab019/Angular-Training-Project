import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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
  },
  {
      id: 4,
      name: 'Tkxel'
  }
];

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private router: Router) { }

  getCompanies(): {} {
    return companies;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
