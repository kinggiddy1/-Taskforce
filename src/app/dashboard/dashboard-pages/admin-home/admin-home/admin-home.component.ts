import { Component, OnInit } from '@angular/core';
import { TransService } from '../../../../shared/services/trans.service';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [],
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  balance: any;
  bank: any; 
  cash: any;
  momo: any;
  expense: any;
  limit: any;
  credit: any;

  constructor(private transService: TransService,  private toastr: ToastrService) {} 

  ngOnInit(): void {

    this.transService.getLimit().subscribe({
      next: (data) => {
        this.limit = data['limitAmount']['limit_amount'];
        console.log(data)
      },

      error: (error) => {
        console.error('Error fetching debit', error);
      }
    })

      

      this.transService.getCredit().subscribe({
        next: (data) => {
          this.credit = data['totalCredit'];
        },
        error: (error) => {
          console.error('Error fetching debit', error);
        }
      })

       this.transService.getBalance().subscribe({
      next: (data) => {
        this.balance = data['Balance'];

      },
        error: (error) => {
          console.error('Error fetching Balance', error);
        }
      });

      this.transService.getDebit().subscribe({
        next: (data) => {
          this.expense = data['totalDebit'];
          if(this.expense  >= this.limit){
            this.toastr.warning('You reached your expense Limit', 'Expense Limit');
          }
        },
        error: (error) => {
          console.error('Error fetching debit', error);
        }
      })

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
