import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent implements OnInit {

  public projects: Project = new Project(
    '60d8c8ccc5c20a25948d8022',
    'Gestion de Stock',
    'Gestion des commandes et facturation',
    'Mouad Louhibi',
    'Leo Messi',
    '01-07-2021',
    ''
  )

  constructor() { }

  ngOnInit(): void {
  }

}
