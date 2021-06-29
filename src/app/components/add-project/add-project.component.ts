import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  
  public form: any;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      sujet: new FormControl(''),
      description: new FormControl(''),
      chef: new FormControl('', [Validators.required, Validators.minLength(3)]),
      chercheur: new FormControl('', [Validators.required, Validators.minLength(3)]),
    })
  }

}
