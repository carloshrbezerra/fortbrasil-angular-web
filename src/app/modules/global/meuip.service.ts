import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

export const urlIP = "https://api.ipify.org/?format=json";
@Injectable({
  providedIn: 'root'
})
export class MeuipService {

  constructor(private http: HttpClient) { }


  meuIp():Observable<any>{
    return this.http.get<any>(urlIP).pipe(
      take(1)
    )
  }
}
