import { urlIP } from './../meuip.service';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { SharedService } from '../services/shared.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  shared: SharedService;

  constructor() {
    this.shared = SharedService.getInstance();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authRequest: any;
    if (this.shared.isLoggedIn() && req.url !=  urlIP) {
      authRequest = req.clone({
        setHeaders: {
          // foi colocado Bearer por causa do json server, tirar caso autenticação em outra api
          'Authorization' : `Bearer ${this.shared.token}`
        }
      });
      return next.handle(authRequest);
    } else {
      return next.handle(req);
    }
  }
}
