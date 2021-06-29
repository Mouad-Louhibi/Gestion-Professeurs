import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: any

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl(''),
      prenom: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    })
  }

  public onSubmit(): void {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@usmba.ac.ma/;
    if (!re.test(String(this.form.controls['email'].value).toLowerCase())) {
      window.alert('Vueillez utiliser votre Email Usmba')
    }
    this.service.register(
      new User(
        '',
        this.form.controls['nom'].value,
        this.form.controls['prenom'].value,
        '',
        this.form.controls['email'].value,
        this.form.controls['password'].value
      )
    )
    this.form.reset()
  }
}
