import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  apiKey = 'HFjtY5zpH7xOM6Mz3gnPazWaDiRBjp22'
  readonly httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  mostViewedArticlesApi: string = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/';

  constructor(private http: HttpClient) { }

  getAllArticlesInAPeriod(period: number): Observable<any[]> {
    return this.http.get<any[]>(this.mostViewedArticlesApi + period + '.json?api-key=' + this.apiKey, this.httpHeader);
  }

}
