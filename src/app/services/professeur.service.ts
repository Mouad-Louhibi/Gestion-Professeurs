import { Injectable } from '@angular/core';
import { Professeur } from '../models/Professeur';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {

  public profs: Array<Professeur>

  constructor() {
    this.profs = new Array<Professeur>();
  }

  public addProf(prof:Professeur):boolean{
    for (let i = 0; i < this.profs.length; i++)
      if (this.profs[i].id == prof.id)
        return false;
    
    this.profs.push(prof);
    return true;
  }

  public getProfs():Array<Professeur>{
    return this.profs;
  }
}
