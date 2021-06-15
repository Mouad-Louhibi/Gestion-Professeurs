import { Component, OnInit } from '@angular/core';
import { ProfesseurService } from '../../services/professeur.service';

@Component({
  selector: 'app-list-prof',
  templateUrl: './list-prof.component.html',
  styleUrls: ['./list-prof.component.scss']
})
export class ListProfComponent implements OnInit {

  public profs:any;

  constructor(private services:ProfesseurService) { }

  ngOnInit(): void {
    this.profs = this.services.getProfs();
  }

}
