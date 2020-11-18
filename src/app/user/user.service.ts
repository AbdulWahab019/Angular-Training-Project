import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { AppService } from '../shared/app.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
              private appService: AppService,
              private router: Router) { }

  public userDataSubject = new ReplaySubject<any>();

  public publishValue(val: any): void {
    this.userDataSubject.next(val);
  }

  getUsers(): any {
      return this.isValidated() && this.http.get('/api/users');
  }

  addUser(user: User): any {
      return this.isValidated() && this.http.post('/api/users', user);
  }

  updateUser(user: User): any {
      return this.isValidated() && this.http.put('/api/users', user);
  }

  deleteUser(user): any {
      return this.isValidated() && this.http.delete('/api/users/' + user.id, user);
  }

  isValidated(): boolean {
    if(!this.appService.isAuthenticated()){
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
