import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get('https://www.reddit.com/r/aww/.json');
  }
}
