import { Component, OnInit } from '@angular/core';
import { Professeur } from 'src/app/models/Professeur';
import { ProfesseurService } from 'src/app/services/professeur.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public profs:any;

  constructor(private services:ProfesseurService) { }

  ngOnInit(): void {
    this.profs = this.services.getProfs();
  }
}
