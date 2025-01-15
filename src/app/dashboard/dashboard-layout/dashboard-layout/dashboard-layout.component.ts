import { Component } from '@angular/core';
import { DashboardHeaderComponent } from '../../dashboard-header/dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from '../../dashboard-footer/dashboard-footer/dashboard-footer.component';
import { RouterOutlet } from '@angular/router';
import { DashboardSidebarComponent } from '../../dashboard-sidebar/dashboard-sidebar/dashboard-sidebar.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [DashboardHeaderComponent, DashboardFooterComponent, RouterOutlet,DashboardFooterComponent, DashboardSidebarComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

}
