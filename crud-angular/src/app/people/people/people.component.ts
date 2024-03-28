import { MatSnackBar } from '@angular/material/snack-bar';
import { People } from './../model/people';
import { Component } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { Observable, catchError, config, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {

  people$: Observable<People[]>;


  constructor(
    private peopleService:PeopleService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) {
    this.people$ = this.peopleService.list()
    .pipe(
      catchError(error  => {
        this.onError('Resource Not Found')
        return of([]);
      })
    );
  }

  refresh(){
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

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onEdit(person: People) {
    this.router.navigate(['edit', person.id], {relativeTo: this.route})
  }

  onRemove(person: People) {
    this.peopleService.delete(person.id.toString()).subscribe(
      () => {
        this.refresh()
        this.snackBar.open('Removido com sucesso!!!','X', {
          duration:2000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      }
    );
  }

}
