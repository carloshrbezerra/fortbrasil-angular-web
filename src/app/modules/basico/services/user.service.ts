import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Usuario } from '../domain/usuario.model';
import { UsuarioSerializer } from '../serializables/usuario.serializer';
import { ResourceService } from '../../global/services/resource.service';
import { take, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  static RESOURCE: any = '';
  url = 'http://localhost:8081/api/usuario';


  constructor(private http: HttpClient) {

  }

  public login(user: any) :Observable<any> {
    const body = new HttpParams()
      .set(`email`, user.email)
      .set(`password`, user.password);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

     return this.http.post<any>(`${this.url}/login`, body.toString(), { headers, observe: 'response' }).pipe(
      take(1)
    )
  }

}
