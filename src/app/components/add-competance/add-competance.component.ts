import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-competance',
  templateUrl: './add-competance.component.html',
  styleUrls: ['./add-competance.component.scss']
})
export class AddCompetanceComponent implements OnInit {

  public form: any;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('')
    })
  }

}
