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
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  public onSubmit(): void {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@usmba.ac.ma/;
    if (!re.test(String(this.form.controls['email'].value).toLowerCase())) {
      window.alert('Vueillez utiliser votre Email Usmba')
    }
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
    // this.location.replace('/'); // clears browser history so they can't navigate with back button
    // this.router.navigate(['/']);
  }
}
