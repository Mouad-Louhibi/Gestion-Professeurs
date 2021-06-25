import { Component, OnInit } from '@angular/core';
import { ProfesseurService } from 'src/app/services/professeur.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public profs: any = [
    {
      // fullName: 'Mouad Louhibi',
      nbrCompetances: 10
    },
    {
      // fullName: 'Mouad Louhibi',
      nbrCompetances: 10
    }
  ]

  constructor(private service:ProfesseurService) { 
    // this.profs = this.service.getProfs();
  }

  ngOnInit(): void { }

}
