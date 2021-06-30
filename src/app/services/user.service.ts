import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private httpClient: HttpClient, private router: Router) {
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

  // POST User
  public register(user: User): void {
    console.log('This USER:', user)
    const newUser = {
      nom: user.nom,
      prenom: user.password,
      email: user.email,
      password: user.password,
    }
    this.httpClient.post<any>(this.url, newUser)
      .subscribe(
        (res) => {
          if (res.message === 'User Created Successfully') {
            this.router.navigate(['/login'])
          } else {
            window.alert(res.message)
          }
        },
        (err) => { console.log(err) }
      );
  }

  // LOGIN User
  public login(user: User): void {
    this.httpClient.post<any>(this.urlLogin, user)
      .subscribe(
        (res) => {
          if (res.message === 'User Logged In Successfully') {
            location.replace("http://localhost:4200/")
          } else {
            window.alert(res.message)
          }
        },
        (err) => { console.log(err) },
      );
  }

  // LOGOUT User
  public logout(): void {
    this.httpClient.get<any>(this.urlLogout)
      .subscribe(
        (res) => {
          if (res.message === 'User Logged Out Successfully') {
            location.replace("http://localhost:4200/login")
          } else {
            window.alert(res.message)
          }
        },
        (err) => { console.log(err) },
      );
  }

  public getCurrent() {
    return this.currnetUser
  }
}
