import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleComponent } from './people/people.component';
import { PeopleFormComponent } from './people-form/people-form.component';
import { PersonResolver } from './guards/person.resolver'

const routes: Routes = [
  { path: '', component: PeopleComponent },
  { path: 'new', component: PeopleFormComponent, resolve: {person: PersonResolver}},
  { path: 'edit/:id', component: PeopleFormComponent, resolve: {person: PersonResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
