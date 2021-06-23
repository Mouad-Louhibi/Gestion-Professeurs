import { Component, OnInit, Input } from '@angular/core';
import { Professeur } from 'src/app/models/Professeur';
import { ProfesseurService } from '../../services/professeur.service';

@Component({
  selector: 'app-list-prof',
  templateUrl: './list-prof.component.html',
  styleUrls: ['./list-prof.component.scss']
})
export class ListProfComponent implements OnInit {

  public profs:any;

  constructor(private services:ProfesseurService) {}

  ngOnInit(): void {
    this.profs = this.services.getProfs();
  }

  deleteProf(id:string){
    this.profs = this.profs.filter((item: { id: string; }) => item.id !== id);
    this.services.deleteProf(id)
  }

  sendProf(prof:any){
    this.services.editProf(prof);
  }
}
