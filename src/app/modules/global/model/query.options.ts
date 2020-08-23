export interface QueryBuilder {
  toQueryMap: () => Map<string, string>;
  toQueryString: () => string;
}

const keySearch : string = 'search'; 

export class QueryOptions implements QueryBuilder {
  public pageNumber: number;
  public pageSize: number;
  public search: string;
  

  constructor() {
    this.pageNumber = 1;
    this.pageSize = 10000;
    this.search = '';
  }

  toQueryMap() {
    const queryMap = new Map<string, string>();
    queryMap.set('page', `${this.pageNumber}`);
    queryMap.set('size', `${this.pageSize}`);
    queryMap.set(keySearch, `${this.search}`);

    return queryMap;
  }

  toQueryString() {
    let queryString = '';
    this.toQueryMap().forEach((value: string, key: string) => {
      if (key == keySearch) {
        queryString = queryString.concat(`${value}&`);
      }else{
        queryString = queryString.concat(`${key}=${value}&`);
      }
    });

    return queryString.substring(0, queryString.length - 1);
  }
}
