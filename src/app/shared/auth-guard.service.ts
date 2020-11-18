import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private appService: AppService,
              private router: Router) { }

  canActivate(): boolean {
    if (!this.appService.isAuthenticated()){
      this.router.navigate(['login']);
      return false;
    }
    else {
      return true;
    }
  }
}
