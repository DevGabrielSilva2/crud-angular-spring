import { People } from './../model/people';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent {

  @Input() people: People[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['id','cpf', 'name', 'surname', 'status', 'dateRegister', 'action' ]

  constructor() {}

    onAdd() {
      this.add.emit(true);
    }

    onEdit(person: People) {
      this.edit.emit(person);
    }

    onDelete(person: People) {
      this.remove.emit(person);
    }

}
