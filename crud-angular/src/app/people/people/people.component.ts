import { Component } from '@angular/core';
import { People } from '../model/people';
import { PeopleService } from '../services/people.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {

  people$: Observable<People[]>;
  displayedColumns = ['cpf', 'name', 'surname', 'status', 'date_register' ]


  constructor(private peopleService:PeopleService, public dialog: MatDialog) {
    this.people$ = this.peopleService.list()
    .pipe(
      catchError(error  => {
        this.onError('Resource Not Found')
        return of([]);
      })
    );
  }

  onError(errorMsg: String) {
    this.dialog.open(ErrorDialogComponent,{
      data: errorMsg
    });
  }

}
