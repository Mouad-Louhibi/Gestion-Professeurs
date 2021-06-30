import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Competance } from '../models/Competance';

@Injectable({
  providedIn: 'root'
})
export class CompetanceService {

  public competances: Array<Competance> = []
  private url: string = "http://localhost:1337/competance";

  constructor(private httpClient: HttpClient) {
    this.competances = new Array<Competance>();
    // GET Competances
    this.httpClient.get<Array<Competance>>(this.url)
      .subscribe(
        (res) => { this.competances.push(...res) },
        (err) => { console.log(err) }
      );
    this.competances = new Array<Competance>();
  }

  // POST Competance
  public addComp(comp: Competance): void {
    console.log(comp)
    this.httpClient.post<any>(this.url, comp)
      .subscribe(
        (res) => {
          if (res.message === 'Competance Created Successfully') {
            location.replace("http://localhost:4200/list-competance")
          } else {
            window.alert(res.message)
          }
        },
        (err) => { console.log(err) },
      );
  }

  getCompetances() {
    return this.competances;
  }
}
