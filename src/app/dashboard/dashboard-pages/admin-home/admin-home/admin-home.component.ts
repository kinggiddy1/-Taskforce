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

  constructor(private transService: TransService,  private toastr: ToastrService) {} 

  ngOnInit(): void {
      this.transService.getDebit().subscribe({
        next: (data) => {
          this.expense = data['totalDebit'];
          if(this.expense  >= 40000){
            this.toastr.warning('You reached your expense Limit', 'Limit');
          }
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
