import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  public baseUrl = "http://localhost:5000/api/book";

  constructor(private httpClient: HttpClient) { }

  public getBook(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}