import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cooperativesociety } from './cooperativesociety';

@Injectable({
  providedIn: 'root'
})
export class CooperativesocietyService {

  private baseURL = 'http://localhost:8082/CooperativeSociety/';

  constructor(private httpClient: HttpClient) { }

  createCooperativeSociety(cooperativesociety: Cooperativesociety): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + `save`, cooperativesociety);
  }
}
