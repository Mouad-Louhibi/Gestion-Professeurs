import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Professeur } from '../models/Professeur';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {

  public profs: Array<Professeur>
  private url: string = "http://localhost:1337/professeur";
  private updateUrl: string = "http://localhost:1337/edit-professeur/60d39ad6b6e6d41994534da9";
  private getUrl: string = "http://localhost:1337/edit-professeur";

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
  public addProf(prof: Professeur): void {
    console.log(prof)
    this.httpClient.post<Professeur>(this.url, prof)
      .subscribe(
        (res) => { this.profs.push(prof) },
        (err) => { console.log(err) },
        () => { console.log("Professeur Created") }
      );
  }

  public updateProf(prof: Professeur): void {
    let profObj = {
      nom: prof.nom,
      prenom: prof.prenom,
      etat: prof.etat
    }
    this.httpClient.patch<Professeur>(this.url + '/' + prof.profId, profObj)
      .subscribe({
        error: error => {
          console.error('There was an error!', error);
        }
      });
  }

  public getProfs(): Array<Professeur> {
    return this.profs
  }

  public deleteProf(id: String): void {
    this.httpClient.delete(this.url + '/' + id)
      .subscribe({
        next: data => {
          'Delete successful';
        },
        error: error => {
          console.error('There was an error!', error)
        },
      })
  }

  public editProf(profToUpdate: any): void {
    const profObj = {
      nom: profToUpdate.nom,
      prenom: profToUpdate.prenom,
      etat: profToUpdate.etat,
      profId: profToUpdate.id
    }
    console.log("PTCH:", profObj)
    this.httpClient.patch<Professeur>(this.updateUrl, profObj)
      .subscribe({
        error: error => {
          console.error('There was an error!', error);
        }
      });
  }

  getEditProf(): Professeur {
    let prof: Professeur = new Professeur()
    this.httpClient.get<Array<Professeur>>(this.getUrl)
      .subscribe(
        (res) => {
          prof.id = res[0].id,
            prof.nom = res[0].nom,
            prof.prenom = res[0].prenom,
            prof.etat = res[0].etat
          prof.profId = res[0].profId
        },
        (err) => { console.log(err) }
      );
    return prof
  }
}
