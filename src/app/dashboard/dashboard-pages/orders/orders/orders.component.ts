import { Component, OnInit } from '@angular/core';
import { TextInputComponent } from '../../../../home/text-input/text-input/text-input.component';
import { TransService } from '../../../../shared/services/trans.service';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [TextInputComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{

  limit: any;

  constructor(private transService: TransService, private router: Router) {}
  
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

}

  private fb = new FormBuilder();

  orderForm = this.fb.group({
    debit: ['', [Validators.required]],
    account: ['', [Validators.required]],
    category: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });


  newOrderForm() {
    console.log('Form Data:', this.orderForm.value);
    this.transService.postOrder(this.orderForm.value).subscribe({
      next: (response) => {
        if (response) {
          this.router.navigateByUrl('/transactions');
        } else {
          console.warn('Token is missing in response');
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
