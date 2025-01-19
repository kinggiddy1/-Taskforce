import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class TransService {
  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient,
              private router: Router) { }

    //get balance
    getBalance(): Observable<any> {
      return this.http.post<any>(this.apiUrl+'balance/', {});
    }

    //get balance
    getDebit(): Observable<any> {
      return this.http.post<any>(this.apiUrl+'totaldebit/', {});
    }

      //get Transactions
    getTransactions(): Observable<any> {
      return this.http.get<any>(this.apiUrl+'transactions/', {});
    }

       //get bank
    getBank(): Observable<any> {
      return this.http.post<any>(this.apiUrl+'bank/', {});
    }

      //get bank
    getCash(): Observable<any> {
    return this.http.post<any>(this.apiUrl+'cash/', {});
    }

    //get bank
    getMoMo(): Observable<any> {
      return this.http.post<any>(this.apiUrl+'momo/', {});
    }

    //Make order
    postOrder(data: any): Observable<any> { 
      return this.http.post<any>(this.apiUrl+'debit/', data);
    }
  
    //Save Income
    postIncome(data: any): Observable<any> { 
      return this.http.post<any>(this.apiUrl+'credit/', data);
    }
  
      //Save Income
      postLimit(data: any): Observable<any> { 
      return this.http.post<any>(this.apiUrl+'limit/', data);
    }
    
    
}
