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
  public profId:string;

  constructor(private service:ProfesseurService, private shared:SharedService) {
    this.prof = new Professeur
    this.profId = ''
    this.shared.currentId.subscribe(profId => this.profId = profId)
    console.log('Edit profId', this.profId)
  }

  ngOnInit(): void {
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
