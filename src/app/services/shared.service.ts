import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private idSource = new BehaviorSubject<string>("Default Id")
  currentId = this.idSource.asObservable()

  constructor() {}

  public setProf(profId:string){
    window.alert(profId)
    this.idSource.next(profId)
  }
}
