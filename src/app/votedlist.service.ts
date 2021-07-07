import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Votedlist } from './votedlist';

@Injectable({
  providedIn: 'root',
})
export class VotedlistService {

  private baseURL = 'http://localhost:8082/VotedList/'
  constructor(private httpClient: HttpClient) {}
  getVotedlist(): Observable<Votedlist[]>{

    return this.httpClient.get<Votedlist[]>(`${this.baseURL}` + 'getAll');

  }
}
