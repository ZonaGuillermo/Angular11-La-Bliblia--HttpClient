import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  baseUrl: string = 'https://rickandmortyapi.com/api';

  constructor(private httpClient: HttpClient) { }

  getAll(numPage: number = 1): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/character/?page=${numPage}`);
  }
}
