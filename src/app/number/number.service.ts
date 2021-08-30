import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NumberService {
  private readonly url = 'http://localhost:1864/api/v1/number/decompose?value=';

  constructor(private http: HttpClient) { }

  getNumberDecompose(valueNumber: number){
    return this.http.get(this.url + valueNumber);
  };

}