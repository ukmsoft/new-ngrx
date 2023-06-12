import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get(url: string, headers: HttpHeaders) {
    return this.httpClient.get(url, { headers });
  }

  post(url: string, body: {}, headers: HttpHeaders) {
    return this.httpClient.post(url, body, { headers });
  }

  delete(url: string, body: {}, headers: HttpHeaders) {
    return this.httpClient.post(url, body, { headers });
  }
}
