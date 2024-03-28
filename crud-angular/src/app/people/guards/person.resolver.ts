import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { People } from '../model/people';
import { PeopleService } from '../services/people.service';

@Injectable({
  providedIn: 'root'
})
export class PersonResolver  {

  constructor(private service: PeopleService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<People> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ id: 0, name: '', surname: '', cpf: '', status: '', dateRegister: new Date() });
}
}
