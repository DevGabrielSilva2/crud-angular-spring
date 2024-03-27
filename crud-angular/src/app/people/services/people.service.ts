import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { People } from './../model/people';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private readonly API = '/assets/people.json'

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<People[]>(this.API)
    .pipe(
      first(),
      delay(2000)
    )
  }
}
