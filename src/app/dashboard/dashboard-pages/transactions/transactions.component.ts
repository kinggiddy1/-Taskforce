import { Component, OnInit ,ViewChild } from '@angular/core';
import { TransService } from '../../../shared/services/trans.service';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { Subject } from 'rxjs';
import DataTables from 'datatables.net';
import { Config } from 'datatables.net';


@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, DataTablesModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit{

  transactions: any[] = []; 
  // dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
 

  constructor(private transService: TransService){}
  dtoptions:Config = {};
 
    ngOnInit(): void {

         this.dtoptions = {
      pagingType: 'full_numbers'
    };
      
      this.transService.getTransactions().subscribe({
        next: (data) => {
          console.log(data);
          this.transactions = data.transactions;
          this.dtTrigger.next(null);
        },
        error: (error) => {
          console.error('Error fetching Balance', error);
        }
      });
    }

    ngAfterViewInit(): void { this.dtTrigger.next({}); } ngOnDestroy(): void { this.dtTrigger.unsubscribe(); }
}
