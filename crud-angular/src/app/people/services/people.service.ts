import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { People } from './../model/people';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private readonly API = 'api/people'

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<People[]>(this.API)
    .pipe(
      first(),
      delay(2000)
    )
  }

  loadById(id: string) {
    return this.httpClient.get<People>(`${this.API}/${id}`);
  }

  save(record: Partial<People>){
    if(record.id){
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<People>){
    return this.httpClient.post<People>(this.API, record);
  }

  private update(record: Partial<People>){
    return this.httpClient.put<People>(`${this.API}/${record.id}`, record);
  }

  delete(id: string){
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
