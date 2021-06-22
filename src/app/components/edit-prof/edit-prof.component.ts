import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Professeur } from 'src/app/models/Professeur';
import { ProfesseurService } from 'src/app/services/professeur.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-edit-prof',
  templateUrl: './edit-prof.component.html',
  styleUrls: ['./edit-prof.component.scss']
})
export class EditProfComponent implements OnInit {

  public form:any;
  public prof:Professeur
  public id:string;
  // public prenom:string;
  // public etat:string;

  constructor(private service:ProfesseurService, private share:SharedService) {
    this.prof = new Professeur
    this.id = share.getProf()
    window.alert(this.id)
    // this.nom = ''
    // this.prenom = ''
    // this.etat = ''
  }

  ngOnInit(): void {
    // this.prof = this.shared.getProf();
    // this.nom = this.prof.nom;
    // this.prenom = this.prof.prenom;
    // this.etat = this.prof.etat;
    this.form = new FormGroup({
      nom:new FormControl('', [Validators.required, Validators.minLength(3)]),
      prenom:new FormControl(''),
      etat:new FormControl('')
    })
  }

  public onSubmit():void{
    this.service.addProf(
      new Professeur(
          '',
          this.form.controls['nom'].value, 
          this.form.controls['prenom'].value, 
          this.form.controls['etat'].value
        )
      )
      this.form.reset()
  }
}
