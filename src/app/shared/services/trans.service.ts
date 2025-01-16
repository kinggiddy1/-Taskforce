import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class TransService {
  private apiUrl = environment.apiUrl; 
  

  constructor(private http: HttpClient,
    private authService: AuthService,
              private router: Router) { }

   //Fetch the token from local storage
   getToken(): string | null {
    return this.authService.getToken();
    }

    //get data
    getData(): Observable<any> {
      return this.http.get<any>(this.apiUrl);
    }
  
  
  
     //get balance
     getBalance(): Observable<any> {
      return this.http.post<any>(this.apiUrl+'balance/', {});
    }

    
    
}
