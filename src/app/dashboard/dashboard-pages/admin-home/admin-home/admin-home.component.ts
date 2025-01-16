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
    bank: any ;
    cash: any ;
    momo: any ;

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

        this.transService.getBank().subscribe({
          next: (data) => {
            this.bank = data['TotalBank'];
          },
          error: (error) => {
            console.error('Error fetching Balance', error);
          }
        });

        this.transService.getCash().subscribe({
          next: (data) => {
            this.cash = data['TotalCash'];
          },
          error: (error) => {
            console.error('Error fetching Balance', error);
          }
        });

        this.transService.getMoMo().subscribe({
          next: (data) => {
            this.momo = data['TotalMoMo'];
          },
          error: (error) => {
            console.error('Error fetching Balance', error);
          }
        });

      }
}
