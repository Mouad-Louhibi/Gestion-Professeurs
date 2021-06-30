import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Competance } from 'src/app/models/Competance';
import { CompetanceService } from 'src/app/services/competance.service';

@Component({
  selector: 'app-add-competance',
  templateUrl: './add-competance.component.html',
  styleUrls: ['./add-competance.component.scss']
})
export class AddCompetanceComponent implements OnInit {

  public form: any;

  constructor(private service: CompetanceService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('')
    })
  }

  public onSubmit(): void {
    this.service.addComp(
      new Competance(
        '',
        this.form.controls['nom'].value,
        this.form.controls['description'].value
      )
    )
    this.form.reset()
  }
}
