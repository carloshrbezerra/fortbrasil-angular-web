import { QueryOptions } from 'src/app/modules/global/model/query.options';
import { Observable, throwError } from 'rxjs';
import { EstabelecimeoSerializer } from '../serializables/estabelecimento.serializer';
import { Estabelecimento } from '../domain/estabelecimento.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take, debounceTime, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  static RESOURCE: any = '';
  serializer = new EstabelecimeoSerializer();
  urlEndpoint = 'http://localhost:8081/api';
  endpoint = 'http://localhost:8081/api';

  constructor(private httpClient: HttpClient) {
  }

  buscarPorLocalizacao(estabelecimento: Estabelecimento):Observable<Estabelecimento[]>{
    return this.httpClient.get<Estabelecimento[]>(`${this.urlEndpoint}/buscar-localizacao/${estabelecimento.localizacao}`).pipe(
      map(data =>this.convertData(data)),
      take(1)
    );
  }

  public create(item: Estabelecimento): Observable<Estabelecimento> {
    return this.httpClient
      .post<Estabelecimento>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item)).pipe(
        map(data => data ? this.serializer.fromJson(data) as T : null),
        debounceTime(3000),
        catchError(this.handleError)
      );
  }

  public update(item: Estabelecimento): Observable<Estabelecimento> {
    return this.httpClient
      .put<Estabelecimento>(`${urlEndpoint}/${item.id}`,
        this.serializer.toJson(item)).pipe(
          map(data => data ? this.serializer.fromJson(data) as T : null),
          debounceTime(3000),
          catchError(this.handleError)
        );
  }

  public createOrUpdate(item: Estabelecimento): Observable<Estabelecimento> {
    if (!item.id) {
      return this.create(item);
    } else {
      return this.update(item);
    }
  }

  public read(id: number): Observable<Estabelecimento> {
    return this.httpClient
      .get(`${this.urlEndpoint}/${id}`).pipe(
        map(data => data ? this.serializer.fromJson(data) as T : null),
        catchError(this.handleError)
      );
  }

  public list(queryOptions: QueryOptions): Observable<Estabelecimento[]> {
    return this.httpClient
      .get(`${this.urlEndpoint}?${queryOptions.toQueryString()}`)
      .pipe(
        map((data: any) => this.convertData(data)),
      );
  }


  public delete(item: Estabelecimento): Observable<Estabelecimento> {
    return this.httpClient.delete<Estabelecimento>(`${this.urlEndpoint}/${item.id}`);
  }


  public convertData(data: any): Estabelecimento[] {
    return data.map(item => this.serializer.fromJson(item));
  }

  protected handleError (error: Response | any) {
    console.error(error.message || error);
    return throwError(error);
  }

  get urlEndpoint(){
    return `${this.urlEndpoint}`;
  }

}
