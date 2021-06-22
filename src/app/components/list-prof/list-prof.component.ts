import { Component, OnInit, Input } from '@angular/core';
import { Professeur } from 'src/app/models/Professeur';
import { SharedService } from 'src/app/services/shared.service';
import { ProfesseurService } from '../../services/professeur.service';

@Component({
  selector: 'app-list-prof',
  templateUrl: './list-prof.component.html',
  styleUrls: ['./list-prof.component.scss']
})
export class ListProfComponent implements OnInit {

  public profs:any;
  public profId:string
  public sharedProf:Professeur

  constructor(private services:ProfesseurService, private shared:SharedService) {
    this.profId = ''
    this.sharedProf = new Professeur
  }

  ngOnInit(): void {
    this.profs = this.services.getProfs();
  }

  deleteProf(id:string){
    this.profs =  this.profs.filter((item: { id: string; }) => item.id !== id);
    this.services.deleteProf(id)
  }

  sendProf(id:string){
    return this.shared.setProf(id)
  }
}
