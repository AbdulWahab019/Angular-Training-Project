import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  isLoggedIn = false;
  token: string;

  constructor(private router: Router,
              private http: HttpClient) { }

  login(): any {
    this.isLoggedIn = true;
    this.http.get('api/login').subscribe((data: {token: string}) => {
      this.token = data.token;
    });
    return this.router.navigate(['/', 'home']);
  }

  register(): any {
    return this.router.navigate(['/', 'login']);
  }
}
