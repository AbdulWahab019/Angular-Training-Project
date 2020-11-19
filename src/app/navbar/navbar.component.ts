import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  logout(): void {
    Swal.fire({
      title: 'Do you want to Logout?',
      showCancelButton: true,
      icon: 'question',
      confirmButtonColor: '#d33',
      confirmButtonText: `Logout`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.appService.logout();
      }
    });
  }
}
