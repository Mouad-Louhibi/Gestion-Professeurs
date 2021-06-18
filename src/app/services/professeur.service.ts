import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Professeur } from '../models/Professeur';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {

  public profs: Array<Professeur>
  private url: string = "http://localhost:1337/professeur";

  constructor(private httpClient: HttpClient) {
    this.profs = new Array<Professeur>();
    // GET Professeurs
    this.httpClient.get<Array<Professeur>>(this.url)
    .subscribe(
      (res) => { this.profs.push(...res) },
      (err) => { console.log(err) },
      () => { console.log("fin") }
    );
    this.profs = new Array<Professeur>();
  }

  // POST Professeur
  public addProf(prof:Professeur):void{
    this.httpClient.post<Professeur>(this.url, prof)
    .subscribe(
      (res) => { this.profs.push(prof) },
      (err) => { console.log(err) },
      () => { console.log("Professeur Created") }
    );
  }

  public getProfs():Array<Professeur>{
    return this.profs
  }

  public deleteProf(id:String):void{
    this.httpClient.delete(this.url + '/' + id);
    // .subscribe(
    //   (res) => { this.profs.push(prof) },
    //   (err) => { console.log(err) },
    //   () => { console.log("Professeur Created") }
    // );
  }
}
