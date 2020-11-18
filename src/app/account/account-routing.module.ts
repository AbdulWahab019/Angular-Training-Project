import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthLoginGuardService } from '../shared/auth-login-guard.service';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

const ROUTES = [
    { path: 'login', component: LoginComponent, canActivate: [AuthLoginGuardService] },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
