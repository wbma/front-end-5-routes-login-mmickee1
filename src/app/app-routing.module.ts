import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LogoutComponent} from './logout/logout.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {FrontComponent} from './front/front.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'front',
    component: FrontComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
