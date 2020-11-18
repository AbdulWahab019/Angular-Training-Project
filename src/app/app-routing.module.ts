import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuardService } from './shared/auth-guard.service';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'home',
                component: NavbarComponent,
                canActivate: [AuthGuardService],
                children: [
                    { path: '', component: HomeComponent }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
