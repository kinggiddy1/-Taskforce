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

      //get Transactions
    getTransactions(): Observable<any> {
        return this.http.get<any>(this.apiUrl+'transactions/', {});
    }

    
    
}
