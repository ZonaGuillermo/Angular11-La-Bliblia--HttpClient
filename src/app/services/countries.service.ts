import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  baseUrl: string = 'https://restcountries.com/v3.1/region/europe'

  constructor(private httpClitent: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.httpClitent.get<any>(this.baseUrl);
  }


}
