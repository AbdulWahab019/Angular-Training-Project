import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private router: Router) { }

  login(): any {
    return this.router.navigate(['/', 'home']);
  }
}
