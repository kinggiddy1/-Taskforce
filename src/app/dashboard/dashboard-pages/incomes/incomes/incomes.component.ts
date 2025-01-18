import { Component } from '@angular/core';
import { TransService } from '../../../../shared/services/trans.service';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextInputComponent } from '../../../../home/text-input/text-input/text-input.component';

@Component({
  selector: 'app-incomes',
  standalone: true,
  imports: [ReactiveFormsModule, TextInputComponent],
  templateUrl: './incomes.component.html',
  styleUrl: './incomes.component.css'
})
export class IncomesComponent {

  constructor(private transService: TransService, private router: Router) {}

  private fb = new FormBuilder();

  orderForm = this.fb.group({
    credit: ['', [Validators.required]],
    account: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });


  newOrderForm() {
    console.log('Form Data:', this.orderForm.value);
    this.transService.postOrder(this.orderForm.value).subscribe({
      next: (response) => {
        if (response) {
          this.router.navigateByUrl('/incomes');
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
