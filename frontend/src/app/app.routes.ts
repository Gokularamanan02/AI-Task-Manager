import { Routes } from '@angular/router';

import { Login } from './features/auth/login/login';
import { Home } from './features/home/home';
import { Dashboard } from './features/dashboard/dashboard';
import { Signup } from './features/auth/signup/signup';
import { Profile } from './features/profile/profile';

import { authGuard } from './guards/auth-guard';


export const routes: Routes = [


  {
    path: '',
    component: Home
  },


  {
    path: 'login',
    component: Login
  },


  {
    path: 'signup',
    component: Signup
  },


  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard]
  },


  {
    path: 'profile',
    component: Profile,
    canActivate: [authGuard]
  },


  {
    path: '**',
    redirectTo: ''
  }

];