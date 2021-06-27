import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: any;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl(''),
    })
  }

  public onSubmit(): void {
    this.service.login(
      new User(
        '',
        '',
        '',
        '',
        this.form.controls['email'].value,
        this.form.controls['password'].value,
        ''
      )
    )
    this.form.reset()
  }
}
