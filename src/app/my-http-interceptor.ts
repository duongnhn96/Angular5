import { Cookie } from 'ng2-cookies/ng2-cookies';

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpXsrfTokenExtractor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Token } from '../../node_modules/@angular/compiler';
@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(private tokenExtractor: HttpXsrfTokenExtractor) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {

        Authorization: `Bearer ${Cookie.get('userToken')}`,
        
        
      }
    });
    return next.handle(request);
  }
}