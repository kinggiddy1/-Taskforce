import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { loadingInterceptor } from './shared/interceptors/loading.interceptor';
import { authInterceptor } from './shared/interceptors/auth.interceptor';



export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    //http requests
    // provideHttpClient(),
    importProvidersFrom([BrowserAnimationsModule]),

  
    //spinners
    provideHttpClient(withInterceptors([loadingInterceptor, authInterceptor])),

     //Toastr
     provideToastr({positionClass: 'toast-top-center'}),
     importProvidersFrom([BrowserAnimationsModule]),
 
  ]
};
