import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private snackBar: MatSnackBar) { 
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
    .subscribe(result => console.log(result), error => this.onError());

  }
  onCancel(){

  }
  private onError(){
    this.snackBar.open("Erro ao salvar curso.","",{duration:5000});
  }

}
