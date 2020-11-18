import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginGuardService {

  constructor(private appService: AppService,
              private router: Router) { }

  canActivate(): boolean {
    if (this.appService.isAuthenticated()){
      this.router.navigate(['home']);
      return false;
    }
    else {
      return true;
    }
  }
}
