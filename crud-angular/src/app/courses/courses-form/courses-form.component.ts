import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formbuilder : FormBuilder,
    private services: CoursesService,
    private snackBar: MatSnackBar,
    private Location: Location) { 
    this.form = this.formbuilder.group({
      name: [null],
      category: [null],
      professor: [null],
      duracao: [null]
    });

  }

  ngOnInit(): void {
  }
  onSubimit(){
    this.services.save(this.form.value)
    .subscribe(result => console.log(this.onSuccess), error => this.onError());
    this.onCancel()
  }
  onCancel(){
    this.Location.back()

  }
  private onSuccess(){
    this.snackBar.open("Salvo com sucesso!","",{duration:5000});
  }
  private onError(){
    this.snackBar.open("Erro ao salvar curso.","",{duration:5000});
  }
}
