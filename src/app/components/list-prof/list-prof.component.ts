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
  public prof:Professeur

  constructor(private services:ProfesseurService) {
    this.prof = new Professeur()
  }

  ngOnInit(): void {
    this.profs = this.services.getProfs();
  }

  // deleteItem(prof:Professeur){
  //   this.service.deletePost(prof.id)
  //       .subscribe(response => {
  //         this.prof = this.profs.filter(item => item.id !== post.id);
  //       });
  // }
}
