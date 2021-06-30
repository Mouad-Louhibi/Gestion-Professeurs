import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Professeur } from 'src/app/models/Professeur';
import { Project } from 'src/app/models/Project';
import { ProfesseurService } from 'src/app/services/professeur.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  public form: any;
  public profs: Array<Professeur>

  constructor(private service: ProjectService, private profService: ProfesseurService) {
    this.profs = this.profService.getProfs()
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      sujet: new FormControl(''),
      description: new FormControl(''),
      chef: new FormControl(''),
      chercheur: new FormControl(''),
    })
  }

  public onSubmit(): void {
    this.service.addProject(
      new Project(
        '',// id
        this.form.controls['sujet'].value,// sujet
        this.form.controls['description'].value,// description
        this.form.controls['chef'].value,// chef
        this.form.controls['chercheur'].value,// chercheur
        '',// dateDebut
        false,// projetId
        ''// archive
      )
    )
    this.form.reset()
  }
}
