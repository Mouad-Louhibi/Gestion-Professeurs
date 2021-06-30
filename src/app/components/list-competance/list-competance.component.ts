import { Component, OnInit } from '@angular/core';
import { Competance } from 'src/app/models/Competance';
import { CompetanceService } from 'src/app/services/competance.service';

@Component({
  selector: 'app-list-competance',
  templateUrl: './list-competance.component.html',
  styleUrls: ['./list-competance.component.scss']
})
export class ListCompetanceComponent implements OnInit {

  public competances: Array<Competance> = []

  constructor(private services: CompetanceService) { }

  ngOnInit(): void {
    this.competances = this.services.getCompetances();
  }
}
