import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Professeur } from 'src/app/models/Professeur';
import { ProfesseurService } from 'src/app/services/professeur.service';

@Component({
  selector: 'app-prof-form',
  templateUrl: './prof-form.component.html',
  styleUrls: ['./prof-form.component.scss']
})
export class ProfFormComponent implements OnInit {

  constructor(private service:ProfesseurService) {}

  public form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      nom:new FormControl('', [Validators.required, Validators.minLength(3)]),
    })
  }

  public onSubmit():void{
    console.log(this.form);
    this.service.addProf(
      new Professeur(this.form.controls['id'].value, this.form.controls['nom'].value, this.form.controls['prenom'].value, this.form.controls['etat'].value))
      this.form.reset()
  }
}
