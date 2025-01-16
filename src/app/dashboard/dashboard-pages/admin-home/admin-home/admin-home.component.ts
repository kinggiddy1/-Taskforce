import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransService } from '../../../../shared/services/trans.service';


@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent implements OnInit{

    balance: any ;

    constructor(private transService: TransService, 
      private router: Router){}
    
  
      ngOnInit(): void {
        this.transService.getBalance().subscribe({
          next: (data) => {
            this.balance = data['Balance'];
          },
          error: (error) => {
            console.error('Error fetching Balance', error);
          }
        });
      }
}
