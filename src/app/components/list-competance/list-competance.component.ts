import { Component, OnInit } from '@angular/core';
import { Competance } from 'src/app/models/Competance';
import { User } from 'src/app/models/User';
import { CompetanceService } from 'src/app/services/competance.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-competance',
  templateUrl: './list-competance.component.html',
  styleUrls: ['./list-competance.component.scss']
})
export class ListCompetanceComponent implements OnInit {

  public competances: Array<Competance> = []
  public user: User = new User()

  constructor(private services: CompetanceService, private userService: UserService) {
    this.user = this.userService.getCurrent()
  }

  ngOnInit(): void {
    this.competances = this.services.getCompetances();
  }

  deleteCompetance(id: string) {
    this.competances = this.competances.filter((item: { id: string; }) => item.id !== id);
    this.services.deleteCompetance(id)
  }
}
