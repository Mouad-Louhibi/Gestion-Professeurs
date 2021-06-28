import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user: User = new User()
  public etat: string = 'Login'

  constructor(private service: UserService, private router: Router) {
    this.user = this.service.getCurrent()
  }

  ngOnInit(): void {

  }

  exit() {
    this.etat = 'Register'
    this.service.logout()
  }
}
