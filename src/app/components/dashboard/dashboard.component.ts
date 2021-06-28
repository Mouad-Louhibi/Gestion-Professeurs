import { Component, OnInit } from '@angular/core';
import { Professeur } from 'src/app/models/Professeur';
import { ProfesseurService } from 'src/app/services/professeur.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public profs: Array<Professeur>

  constructor(private service: ProfesseurService) {
    this.profs = this.service.getProfs();
  }

  ngOnInit(): void {
    // location.reload();
  }

}
