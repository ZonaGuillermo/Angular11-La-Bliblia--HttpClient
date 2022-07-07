import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl);
  }

  getById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`);
  }

  create({ userId, title, body }: any): Observable<any> {
    const bodyRequest = { userId, title, body };
    return this.httpClient.post<any>(this.baseUrl, bodyRequest);
  }
}
