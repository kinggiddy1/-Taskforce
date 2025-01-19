import { Component } from '@angular/core';
import { TextInputComponent } from '../../../../home/text-input/text-input/text-input.component';
import { TransService } from '../../../../shared/services/trans.service';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-expense-limit',
  standalone: true,
  imports: [TextInputComponent, ReactiveFormsModule],
  templateUrl: './expense-limit.component.html',
  styleUrl: './expense-limit.component.css'
})
export class ExpenseLimitComponent {

  constructor(private transService: TransService, private router: Router, private toastr: ToastrService) {}

  private fb = new FormBuilder();

  limitForm = this.fb.group({
    limit_amount: ['', [Validators.required]],

  });

  newlimitForm() {
    this.transService.postLimit(this.limitForm.value).subscribe({
      next: (response) => {
        if (response) {
          this.toastr.success('Successfully updated montly limit', 'Expense Limit');
          this.router.navigateByUrl('/orders');
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
