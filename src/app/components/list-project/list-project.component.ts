import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent implements OnInit {

  public projects: Array<Project>

  constructor(private service: ProjectService) {
    this.projects = this.service.getProjects()
  }

  ngOnInit(): void {
  }
}
