import { ActivatedRoute, Router, Routes } from '@angular/router';
import { ErroDialogComponent } from '../../../shared/components/erro-dialog/erro-dialog.component';
import { CoursesService } from '../../services/courses.service';
import { Courses } from '../../model/courses';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Courses[]>;

  

  constructor(
    private coursesService : CoursesService,
    public dialog: MatDialog, 
    private router: Router,
    private route: ActivatedRoute
    ) { 
    this.courses$ = coursesService.list().pipe(
      catchError(error =>{
        this.onError('Erro ao carregar os dados da página.')
        return of([])
      })
    );

  }
  onError(errorMsg : string) {
    this.dialog.open(ErroDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }
  onAdd(){
    this.router.navigate(["new"], {relativeTo: this.route})
    
  }

}
