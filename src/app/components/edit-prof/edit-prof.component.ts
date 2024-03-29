import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Competance } from 'src/app/models/Competance';
import { Professeur } from 'src/app/models/Professeur';
import { CompetanceService } from 'src/app/services/competance.service';
import { ProfesseurService } from 'src/app/services/professeur.service';

@Component({
  selector: 'app-edit-prof',
  templateUrl: './edit-prof.component.html',
  styleUrls: ['./edit-prof.component.scss']
})
export class EditProfComponent implements OnInit {

  public form: any;
  public prof: Professeur
  public competances: Array<Competance>

  constructor(private service: ProfesseurService, private compService: CompetanceService) {
    this.prof = service.getEditProf()
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
    var profObj = {
      id: this.prof.id,
      nom: this.form.controls['nom'].value,
      prenom: this.form.controls['prenom'].value,
      etat: this.form.controls['etat'].value,
      competance: this.form.controls['competance'].value,
      profId: this.prof.profId
    }
    if (profObj.nom === '') profObj.nom = this.prof.nom
    if (profObj.prenom === '') profObj.prenom = this.prof.prenom
    if (profObj.etat === '') profObj.etat = this.prof.etat
    if (profObj.competance === '') profObj.competance = this.prof.competance
    this.service.updateProf(profObj)
    console.log("FORM:", profObj)
  }
}
