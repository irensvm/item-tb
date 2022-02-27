import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from './items';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:3000/Items';
  getItems() {
    return this.http.get<Items[]>(this.url);
  }
}
