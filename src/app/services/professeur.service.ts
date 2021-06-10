import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professeur } from '../models/Professeur';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {

  public profs: Array<Professeur>
  private url:string="http://localhost:1337/professeur";

  constructor(private httpClient: HttpClient) {
    this.profs = new Array<Professeur>();
    this.httpClient.get<Array<Professeur>>(this.url)
    .subscribe(
      (res)=>{ 
        this.profs.push(...res)
      },
      (err)=>{console.log(err)},
      ()=>{console.log("fin")}
      );
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
    return this.profs
  }
}
