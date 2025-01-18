import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './home/default-layout/default-layout/default-layout.component';
import { HomeIndexComponent } from './home/home-index/home-index/home-index.component';
import { AuthenticationComponent } from './home/authentication/authentication/authentication.component';
import { DashboardLayoutComponent } from './dashboard/dashboard-layout/dashboard-layout/dashboard-layout.component';
import { AdminHomeComponent } from './dashboard/dashboard-pages/admin-home/admin-home/admin-home.component';
import { authGuard } from './shared/guards/auth.guard';
import { TransactionsComponent } from './dashboard/dashboard-pages/transactions/transactions.component';
import { OrdersComponent } from './dashboard/dashboard-pages/orders/orders/orders.component';
import { IncomesComponent } from './dashboard/dashboard-pages/incomes/incomes/incomes.component';

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
            component: AdminHomeComponent,
            canActivate: [authGuard],
            data: { roles: ['Admin'] },
          },
          {
            path: 'transactions',
            component: TransactionsComponent,
            canActivate: [authGuard],
            data: { roles: ['Admin'] },
          },
          {
            path: 'orders',
            component: OrdersComponent,
            canActivate: [authGuard],
            data: { roles: ['Admin'] },
          },
          {
            path: 'incomes',
            component: IncomesComponent,
            canActivate: [authGuard],
            data: { roles: ['Admin'] },
          },
        ],
      },
      {
        path: '**',
        redirectTo: '/auth',
      },

    
];
