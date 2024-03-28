import { People } from './../model/people';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { PeopleService } from '../services/people.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrl: './people-form.component.css'
})
export class PeopleFormComponent implements OnInit {

  form = this.formBuilder.group({
    id:[0],
    name:[''],
    surname:[''],
    cpf:[''],
    status:[''],
    dateRegister:[new Date()],

  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: PeopleService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    const person: People = this.route.snapshot.data['person']
    this.form.setValue({
      id: person.id,
      name: person.name,
      surname: person.surname,
      cpf: person.cpf,
      status: person.status,
      dateRegister: person.dateRegister
    });
  }

  public formatCPF(event: Event){
    const inputElement = event.target as HTMLInputElement;
    if(inputElement) {
        const valor = inputElement.value;

        const valorSemFormato = valor.replace(/[^\d]/g, '');

        let valorFormatado = '';
        for (let i = 0; i < valorSemFormato.length; i++) {
            if (i === 3 || i === 6) {
                valorFormatado += '.';
            } else if (i === 9) {
                valorFormatado += '-';
            }
            valorFormatado += valorSemFormato[i];
        }

        inputElement.value = valorFormatado;
    }
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => this.onSuccess(), error => this.onError());
  }

  private onSuccess(){
    this.snackBar.open('sucesso !!!','',{duration:2000})
    this.location.back();
  }

  private onError(){
    this.snackBar.open('Erro ao salvar novo registro','',{duration:2000})
  }

}
