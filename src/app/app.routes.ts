import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './home/default-layout/default-layout/default-layout.component';
import { HomeIndexComponent } from './home/home-index/home-index/home-index.component';
import { AuthenticationComponent } from './home/authentication/authentication/authentication.component';
import { DashboardLayoutComponent } from './dashboard/dashboard-layout/dashboard-layout/dashboard-layout.component';
import { AdminHomeComponent } from './dashboard/dashboard-pages/admin-home/admin-home.component';

export const routes: Routes = [

    {
        path: '',
        component:DefaultLayoutComponent ,
        children: [
          {
            path: '',
            component:HomeIndexComponent,
            pathMatch: 'full',
          },
          {
            path: 'auth',
            component:AuthenticationComponent ,
          }
         
        ]
      },
      {
        path: '',
        component: DashboardLayoutComponent,
        children: [
          {
            path: 'dashboard',
            component: AdminHomeComponent
          },
        ],
      },
      {
        path: '**',
        redirectTo: '/auth',
      },

    
];
