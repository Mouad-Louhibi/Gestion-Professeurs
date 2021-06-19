import { Component, OnInit } from '@angular/core';
import { Professeur } from 'src/app/models/Professeur';
import { ProfesseurService } from '../../services/professeur.service';

@Component({
  selector: 'app-list-prof',
  templateUrl: './list-prof.component.html',
  styleUrls: ['./list-prof.component.scss']
})
export class ListProfComponent implements OnInit {

  public profs:any;
  public profId:string

  constructor(private services:ProfesseurService) {
    this.profId = ''
  }

  ngOnInit(): void {
    this.profs = this.services.getProfs();
  }

  deleteProf(id:string){
    this.services.deleteProf(id)
    this.profs.filter((item: { id: string; }) => item.id !== id);
  }
}
