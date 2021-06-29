import { Component, OnInit } from '@angular/core';
import { Competance } from 'src/app/models/Competance';

@Component({
  selector: 'app-list-competance',
  templateUrl: './list-competance.component.html',
  styleUrls: ['./list-competance.component.scss']
})
export class ListCompetanceComponent implements OnInit {

  public competances: Array<Competance> = [
    new Competance('70d8c8ccc5c20a25948d8022', 'Javascript', 'Creation des API avec Javascript'),
    new Competance('70d8c8ccc5c20a25948d8023', 'PHP', 'Bon metrise de PHP et Laravel'),
    new Competance('70d8c8ccc5c20a25948d8024', 'Angular', 'Injection de Chart.js dans un projet Angular'),
    new Competance('70d8c8ccc5c20a25948d8025', 'Java', 'Bon metrise de JEE et Spring Boot'),
    new Competance('70d8c8ccc5c20a25948d8026', 'C++', 'Creation des Jeux avec C++'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
