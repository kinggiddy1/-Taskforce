import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent implements OnInit{

    balance: any | null = null;

    constructor(private authService: AuthService, 
      private router: Router){}
    
  
      ngOnInit(): void {
        this.authService.getBalance().subscribe({
          next: (data) => {
            console.log(data);
            this.balance = data['Balance'];
          },
          error: (error) => {
            console.error('Error fetching Balance', error);
          }
        });
      }
}
