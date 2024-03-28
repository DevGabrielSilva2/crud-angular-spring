import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people/people.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { PeopleFormComponent } from './people-form/people-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PeopleListComponent } from './people-list/people-list.component';


@NgModule({
  declarations: [
    PeopleComponent,
    PeopleFormComponent,
    PeopleListComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PeopleModule { }
