import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Competance } from 'src/app/models/Competance';
import { Professeur } from 'src/app/models/Professeur';
import { CompetanceService } from 'src/app/services/competance.service';
import { ProfesseurService } from 'src/app/services/professeur.service';

@Component({
  selector: 'app-prof-form',
  templateUrl: './prof-form.component.html',
  styleUrls: ['./prof-form.component.scss']
})
export class ProfFormComponent implements OnInit {

  public form: any;
  public competances: Array<Competance>

  constructor(private service: ProfesseurService, private compService: CompetanceService) {
    this.competances = this.compService.getCompetances()
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
      prenom: new FormControl(''),
      etat: new FormControl(''),
      competance: new FormControl('')
    })
  }

  public onSubmit(): void {
    const id = ''
    const nom = this.form.controls['nom'].value
    const prenom = this.form.controls['prenom'].value
    const etat = this.form.controls['etat'].value
    const competance = this.form.controls['competance'].value
    this.service.addProf(
      new Professeur(
        id,
        nom,
        prenom,
        etat,
        competance
      )
    )
    this.form.reset()
  }
}
