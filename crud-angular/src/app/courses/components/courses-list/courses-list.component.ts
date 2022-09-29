import { Courses } from '../../model/courses';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  
  @Input() courses: Courses[] = [];
  @Output() add = new EventEmitter(false)
  readonly displayedColumns = ["name", "category","professor","duracao", "actions"]

  constructor() { }

  ngOnInit(): void {
  }
  onAdd(){
    this.add.emit(true)
    
  }
}
