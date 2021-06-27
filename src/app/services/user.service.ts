import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "http://localhost:1337/user";
  private urlLogin: string = "http://localhost:1337/user/login";
  private urlLogout: string = "http://localhost:1337/user/logout";

  constructor(private httpClient: HttpClient) { }

  // POST Professeur
  public login(): void {
    this.httpClient.post<any>(this.urlLogin, {})
      .subscribe(
        // (res) => { this.profs.push(prof) },
        (err) => { console.log(err) },
        () => { console.log("Professeur Created") }
      );
  }
}
