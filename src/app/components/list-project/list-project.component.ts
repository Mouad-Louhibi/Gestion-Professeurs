import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { User } from 'src/app/models/User';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent implements OnInit {

  public projects: Array<Project>
  public user: User = new User()

  constructor(private service: ProjectService, private userService: UserService) {
    this.projects = this.service.getProjects()
    this.user = this.userService.getCurrent()
  }

  ngOnInit(): void {
  }

  archive(id: string) {
    this.service.archiveProject(id)
  }
}
