import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "http://localhost:1337/user";
  private urlLogin: string = "http://localhost:1337/user/login";
  private urlLogout: string = "http://localhost:1337/user/logout";
  private urlCurrent: string = "http://localhost:1337/user/current";
  public currnetUser: User = new User()

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<any>(this.urlCurrent)
      .subscribe(
        (res) => { 
          this.currnetUser.nom = res.nom,
          this.currnetUser.prenom = res.prenom,
          this.currnetUser.etat = res.etat,
          this.currnetUser.email = res.email,
          this.currnetUser.rules = res.rules
         },
        (err) => { console.log(err) }
      );
  }

  // POST Professeur
  public login(user: User): void {
    this.httpClient.post<any>(this.urlLogin, user)
      .subscribe(
        // (res) => { console.log(res) },
        (err) => { console.log(err) },
      );
  }

  public getCurrent() {
    return this.currnetUser
  }
}