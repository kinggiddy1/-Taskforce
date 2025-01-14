import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './home/default-layout/default-layout/default-layout.component';
import { HomeIndexComponent } from './home/home-index/home-index/home-index.component';
import { AuthenticationComponent } from './home/authentication/authentication/authentication.component';

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
        path: '**',
        redirectTo: '/auth',
      },

    
];
