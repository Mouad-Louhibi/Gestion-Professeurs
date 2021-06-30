import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public projects: Array<Project> = []
  private url: string = "http://localhost:1337/project";

  constructor(private httpClient: HttpClient) {
    // GET Projects
    this.httpClient.get<Array<Project>>(this.url)
      .subscribe(
        (res) => { this.projects.push(...res) },
        (err) => { console.log(err) }
      );
    this.projects = new Array<Project>();
  }

  // POST Project
  public addProject(project: Project): void {
    // console.log('Project', project)
    const prjObj = {
      sujet: project.sujet,
      description: project.description,
      chef: project.chef,
      prof: project.chercheur
    }
    this.httpClient.post<any>(this.url, project)
      .subscribe(
        // (res) => {
        //   if (res.message === 'Project Created Successfully') {
        //     location.replace("http://localhost:4200/list-project")
        //   } else {
        //     window.alert(res.message)
        //   }
        // },
        (err) => { console.log(err) },
      );
  }

  getProjects(): Array<Project> {
    return this.projects
  }
}
