import { Component, OnInit, Input } from '@angular/core';
import { Professeur } from 'src/app/models/Professeur';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { ProfesseurService } from '../../services/professeur.service';

@Component({
  selector: 'app-list-prof',
  templateUrl: './list-prof.component.html',
  styleUrls: ['./list-prof.component.scss']
})
export class ListProfComponent implements OnInit {

  public profs: any;
  public user: User = new User()

  constructor(private services: ProfesseurService, private userService: UserService) {
    this.user = this.userService.getCurrent()
  }

  ngOnInit(): void {
    this.profs = this.services.getProfs();
  }

  deleteProf(id: string) {
    this.profs = this.profs.filter((item: { id: string; }) => item.id !== id);
    this.services.deleteProf(id)
  }

  sendProf(prof: any) {
    this.services.editProf(prof);
  }
}
