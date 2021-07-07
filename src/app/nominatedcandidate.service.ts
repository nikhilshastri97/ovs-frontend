import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nominatedcandidate } from './nominatedcandidate';

@Injectable({
  providedIn: 'root'
})
export class NominatedcandidateService {
  private baseURL = 'http://localhost:8082/NominatedCandidate/'

  constructor(private httpClient: HttpClient) { }

  createNominatedCandiate(nominatedcandidate: Nominatedcandidate): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + `save`, nominatedcandidate);
  }
}
