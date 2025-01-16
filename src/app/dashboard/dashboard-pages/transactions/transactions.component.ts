import { Component, OnInit } from '@angular/core';
import { TransService } from '../../../shared/services/trans.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit{

  transactions: any[] = []; 

  constructor(private transService: TransService, 
    private router: Router){}
  

    ngOnInit(): void {
      this.transService.getTransactions().subscribe({
        next: (data) => {
          console.log(data);
          this.transactions = data.transactions;
        },
        error: (error) => {
          console.error('Error fetching Balance', error);
        }
      });
    }
}
