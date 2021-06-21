import { Component, OnInit } from '@angular/core';
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
    this.profs =  this.profs.filter((item: { id: string; }) => item.id !== id);
    this.services.deleteProf(id)
  }
}
